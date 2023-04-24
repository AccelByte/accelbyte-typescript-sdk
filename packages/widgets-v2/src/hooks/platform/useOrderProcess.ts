/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CurrencyType, ItemType } from '@od-shared/models/EcommTypes'
import { PurchaseConstraint, PurchaseHelper } from '@od-shared/utils/PurchaseHelper'
import { RegionDataItemHelper } from '@od-shared/utils/RegionDataItemHelper'
import {
  CurrencyInfo,
  ItemDynamicDataInfo,
  ItemInfo,
  ItemInfoArray,
  ItemPurchaseConditionValidateResultArray,
  OrderInfo,
  Ownership,
  Platform,
  RegionDataItem,
  WalletInfo,
  PlatformClient
} from '@accelbyte/sdk-platform'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '../useSdk'
import { createStore, useStore } from '../useStore'
import { useCallback } from 'react'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { HookDataReturns } from '~/models/hook'
import { useWallet } from './useWallet'
import { FeatureFlagsType } from '@od-shared/FeatureFlags'
import { UserResponseV3 } from '@accelbyte/sdk-iam'
import { AccelbyteSDK } from '@accelbyte/sdk'

interface UseOrdersParams {
  item: ItemInfo
  userId?: string | null
}

export interface PrepurchaseInformation {
  availableItemInfo: ItemDynamicDataInfo | null
  itemOwnership: Ownership | null
  baseAppOwnership: Ownership | null
  purchaseConditionValidation: ItemPurchaseConditionValidateResultArray | null

  purchaseConstraint: PurchaseConstraint | null
  walletMap: Map<string, WalletInfo> | null
  unmatchedPurchaseRequirementItems: ItemInfo[] | null
}

interface State {
  // We don't store the "created order" here because it's only used once and we can return it right away from the purchase function.
  purchaseProcessFetchStatus: FetchStatus
  purchaseProcessError: FetchErrorType | null

  prepurchaseInformation: PrepurchaseInformation | null
  prepurchaseInformationFetchStatus: FetchStatus
  prepurchaseInformationError: FetchErrorType | null
}

const DEFAULT_STATE: State = {
  // We don't store the "created order" here because it's only used once and we can return it right away from the purchase function.,
  purchaseProcessFetchStatus: FetchStatus.IDLE,
  purchaseProcessError: null,

  prepurchaseInformation: null,
  prepurchaseInformationFetchStatus: FetchStatus.IDLE,
  prepurchaseInformationError: null
}

const ordersStore = createStore(DEFAULT_STATE)

export function useOrderProcess() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(ordersStore)

  const {
    mutations: { refreshWallet }
  } = useWallet()

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const prepareOrderProcess = useCallback(
    async ({
      item,
      userId,
      currencyMap
    }: UseOrdersParams & { currencyMap: Map<string, CurrencyInfo> }): Promise<HookDataReturns<State['prepurchaseInformation']>> => {
      let nextPrepurchaseInformation: State['prepurchaseInformation'] = null
      let nextPrepurchaseInformationError: State['prepurchaseInformationError'] = null

      try {
        setState({
          prepurchaseInformationFetchStatus: FetchStatus.FETCHING,
          prepurchaseInformationError: null
        })

        const { availableItemInfo, itemOwnership, baseAppOwnership, purchaseConditionValidation } = await fetchPrePurchaseInformation({
          sdk,
          userId,
          item
        })

        const walletMap = await fetchWalletMap(sdk, userId, filterUsedCurrencyCodesFromCurrencyMap(item, currencyMap))
        const purchaseConstraint = PurchaseHelper.makePurchaseConstraint(item, availableItemInfo, currencyMap, walletMap)

        let unmatchedItems: ItemInfoArray | null = null

        const unmatchedItemIds = getPurchaseValidationUnmatchItemIds(purchaseConditionValidation)
        if (unmatchedItemIds) {
          unmatchedItems = await fetchPurchaseValidationUnmatchItem(sdk, unmatchedItemIds)
        }

        nextPrepurchaseInformation = {
          walletMap,
          purchaseConstraint,
          availableItemInfo,
          itemOwnership,
          baseAppOwnership,
          purchaseConditionValidation,
          unmatchedPurchaseRequirementItems: unmatchedItems
        }
        return { data: nextPrepurchaseInformation }
      } catch (err) {
        nextPrepurchaseInformationError = WidgetErrorHelper.getErrorType(err)
        return { error: err as Error }
      } finally {
        setState({
          prepurchaseInformation: nextPrepurchaseInformation,
          prepurchaseInformationFetchStatus: FetchStatus.IDLE,
          prepurchaseInformationError: nextPrepurchaseInformationError
        })
      }
    },
    [sdk]
  )

  const purchase = useCallback(
    async ({
      userId,
      item,
      regionData,
      quantity,
      returnUrl
    }: UseOrdersParams & {
      regionData: RegionDataItem
      quantity: number
      returnUrl: string | null
    }): Promise<HookDataReturns<OrderInfo | null>> => {
      let order: OrderInfo | null = null
      let nextPurchaseProcessError: State['purchaseProcessError'] = null

      if (!userId) return { data: order }

      try {
        setState({
          purchaseProcessFetchStatus: FetchStatus.PURCHASING,
          purchaseProcessError: null
        })

        order = await Platform.OrderApi(sdk).createOrder_ByUserId(userId, {
          quantity,
          price: (regionData.price || 0) * quantity,
          discountedPrice: RegionDataItemHelper.getFinalPrice(regionData) * quantity,
          currencyCode: regionData.currencyCode,
          itemId: item.itemId,
          returnUrl
        })

        return { data: order }
      } catch (err) {
        nextPurchaseProcessError = WidgetErrorHelper.getErrorType(err)
        return { error: err as Error }
      } finally {
        setState({
          purchaseProcessFetchStatus: FetchStatus.IDLE,
          purchaseProcessError: nextPurchaseProcessError
        })
      }
    },
    [sdk]
  )

  // Post order hooks. Mostly to "sync" stuff.
  const onOrderCreatedHook = useCallback(
    ({ user, flags, createdOrder }: { user: UserResponseV3 | null; flags: FeatureFlagsType | null; createdOrder: OrderInfo }) => {
      if (createdOrder.itemSnapshot) {
        switch (createdOrder.currency.currencyType) {
          case CurrencyType.enum.VIRTUAL:
            refreshWallet(user, flags)
            break
        }
      }
    },
    []
  )

  const onOrderFulfilledHook = useCallback(
    ({ user, flags, createdOrder }: { user: UserResponseV3 | null; flags: FeatureFlagsType | null; createdOrder: OrderInfo }) => {
      if (createdOrder.itemSnapshot) {
        switch (createdOrder.itemSnapshot.itemType) {
          case ItemType.enum.COINS:
            refreshWallet(user, flags)
            break
        }
      }
    },
    []
  )

  return {
    state,
    mutations: {
      resetState,
      prepareOrderProcess,
      purchase,
      onOrderCreatedHook,
      onOrderFulfilledHook
    }
  }
}

// Helper functions.
async function fetchPrePurchaseInformation({ sdk, userId, item }: { sdk: AccelbyteSDK; userId?: string | null; item: ItemInfo }) {
  const [availableItemInfoResult, itemOwnershipResult, baseAppOwnershipResult, purchaseConditionValidationResult] = await Promise.all([
    Platform.ItemApi(sdk).getDynamic_ByItemId(item.itemId),
    userId && item.itemId
      ? Platform.EntitlementApi(sdk).getEntitlementsOwnershipAny_ByUserId(userId, {
          itemIds: [item.itemId].filter(Boolean) as string[]
        })
      : null,

    userId && item.baseAppId
      ? Platform.EntitlementApi(sdk).getEntitlementsOwnershipAny_ByUserId(userId, {
          appIds: [item.baseAppId].filter(Boolean) as string[]
        })
      : null,

    userId
      ? Platform.ItemApi(sdk).createItemPurchaseConditionValidate({
          itemIds: [item.itemId]
        })
      : null
  ])

  // if (availableItemInfoResult.error) throw availableItemInfoResult.error
  // if (itemOwnershipResult?.error) throw itemOwnershipResult.error
  // if (baseAppOwnershipResult?.error) throw baseAppOwnershipResult.error
  // if (purchaseConditionValidationResult?.error) throw purchaseConditionValidationResult.error

  return {
    availableItemInfo: availableItemInfoResult,
    itemOwnership: itemOwnershipResult || null,
    baseAppOwnership: baseAppOwnershipResult || null,
    purchaseConditionValidation: purchaseConditionValidationResult || null
  }
}

function getPurchaseValidationUnmatchItemIds(
  purchaseConditionValidation: ItemPurchaseConditionValidateResultArray | null
): string[] | undefined {
  if (!purchaseConditionValidation || !purchaseConditionValidation[0]) return
  const [{ validateDetails }] = purchaseConditionValidation
  if (!validateDetails || !validateDetails[0]?.predicateValidateResults) return

  const unmatchedItemIds: string[] = []

  validateDetails[0].predicateValidateResults.forEach(({ unmatched }) => {
    if (!unmatched) return
    unmatchedItemIds.push(...unmatched)
  })

  return Array.from(new Set(unmatchedItemIds))
}

async function fetchPurchaseValidationUnmatchItem(sdk: AccelbyteSDK, unmatchedItemIds: string[]) {
  if (unmatchedItemIds.length === 0) return null

  return await Platform.ItemApi(sdk).getItemsLocaleByIds({
    itemIds: unmatchedItemIds.toString()
  })
}

function filterUsedCurrencyCodesFromCurrencyMap(item: ItemInfo, currencyMap: Map<string, CurrencyInfo>) {
  const currencyCodeSet = new Set(
    Array.from(currencyMap.values())
      .filter(currency => currency.currencyType === CurrencyType.enum.VIRTUAL)
      .map(currency => currency.currencyCode)
  )

  return (item.regionData || []).map(regionDatum => regionDatum.currencyCode).filter(currencyCode => currencyCodeSet.has(currencyCode))
}

async function fetchWalletMap(
  sdk: AccelbyteSDK,
  userId: string | null | undefined,
  currencyCodes: string[]
): Promise<Map<string, WalletInfo>> {
  if (!userId) return new Map()

  return await PlatformClient.getWalletMap(userId, currencyCodes, sdk)
}
