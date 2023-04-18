/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ItemType } from '@od-shared/models/EcommTypes'
import { AccelbyteSDK } from '@accelbyte/sdk'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useCallback, useState } from 'react'
import { useSdk } from '~/hooks/useSdk'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import {
  EntitlementDecrement,
  EntitlementDecrementResult,
  EntitlementInfo,
  EntitlementOwnership,
  EntitlementPagingSlicedResult,
  ItemInfo,
  Platform
} from '@accelbyte/sdk-platform'

export const PurchasedItemsHooks = {
  usePurchasedKeys,
  usePurchasedOptionboxes,
  useClaimOptionbox
}

// Purchased keys hook.
interface PurchasedKeysState {
  purchasedKeysInfo: {
    codes: ItemInfo[] | null
    keys: EntitlementPagingSlicedResult | null
  } | null
  purchasedKeysFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  purchasedKeysError: FetchErrorType | null
}

function usePurchasedKeys() {
  const [sdk] = useSdk()
  const [state, setState] = useState<PurchasedKeysState>({
    purchasedKeysInfo: null,
    purchasedKeysError: null,
    purchasedKeysFetchStatus: FetchStatus.IDLE
  })

  const fetchPurchasedKeysInfo = useCallback(
    async ({
      fetchProductKeysQueryParams
    }: {
      fetchProductKeysQueryParams: {
        userId: string
        page: number
      }
    }): Promise<HookDataReturns<PurchasedKeysState['purchasedKeysInfo']>> => {
      let purchasedKeysInfo: PurchasedKeysState['purchasedKeysInfo'] = null
      let error: FetchErrorType | null = null

      try {
        setState(oldState => ({
          ...oldState,
          purchasedKeysFetchStatus: FetchStatus.FETCHING,
          purchasedKeysError: null
        }))

        const [codes, keys] = await Promise.all([fetchCodes(sdk), fetchProductKeys({ sdk, ...fetchProductKeysQueryParams })])
        purchasedKeysInfo = {
          codes,
          keys
        }

        return { data: purchasedKeysInfo }
      } catch (err) {
        error = WidgetErrorHelper.getErrorType(err)
        return { error }
      } finally {
        setState({ purchasedKeysInfo, purchasedKeysError: error, purchasedKeysFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      fetchPurchasedKeysInfo
    }
  }
}

// Purchased optionbox hooks.
interface PurchasedOptionboxesState {
  optionboxEntitlements: EntitlementPagingSlicedResult | null
  optionboxEntitlementsFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  optionboxEntitlementsError: FetchErrorType | null
}

function usePurchasedOptionboxes() {
  const [sdk] = useSdk()
  const [state, setState] = useState<PurchasedOptionboxesState>({
    optionboxEntitlements: null,
    optionboxEntitlementsFetchStatus: FetchStatus.IDLE,
    optionboxEntitlementsError: null
  })

  const fetchOwnedOptionboxes = useCallback(
    async ({
      userId,
      page
    }: {
      userId: string
      page: number
    }): Promise<HookDataReturns<PurchasedOptionboxesState['optionboxEntitlements']>> => {
      let nextOptionboxEntitlements: PurchasedOptionboxesState['optionboxEntitlements'] = null
      let nextOptionboxEntitlementsError: PurchasedOptionboxesState['optionboxEntitlementsError'] = null

      try {
        setState(oldState => ({
          ...oldState,
          optionboxEntitlementsError: null,
          optionboxEntitlementsFetchStatus: FetchStatus.FETCHING
        }))

        nextOptionboxEntitlements = await Platform.EntitlementApi(sdk).getEntitlements_ByUserId(userId, {
          offset: getOffset(page),
          limit: getLimit(),
          entitlementClazz: ItemType.enum.OPTIONBOX
        })

        return { data: nextOptionboxEntitlements }
      } catch (error) {
        nextOptionboxEntitlementsError = WidgetErrorHelper.getErrorType(error)
        return { error: nextOptionboxEntitlementsError }
      } finally {
        setState(oldState => ({
          ...oldState,
          optionboxEntitlements: nextOptionboxEntitlements,
          optionboxEntitlementsError: nextOptionboxEntitlementsError,
          optionboxEntitlementsFetchStatus: FetchStatus.IDLE
        }))
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      fetchOwnedOptionboxes
    }
  }
}

interface ClaimOptionboxState {
  itemsContainedInOptionbox: ItemInfo[] | null
  itemsEntitlementStatus: Map<string, EntitlementOwnership> | null
  itemsEntitlementStatusFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  itemsEntitlementStatusError: FetchErrorType | null

  claimedEntitlement: EntitlementDecrementResult | null
  claimedEntitlementFetchStatus: FetchStatus.IDLE | FetchStatus.CLAIMING
  claimedEntitlementError: FetchErrorType | null
}

function useClaimOptionbox() {
  const [sdk] = useSdk()
  const [state, setState] = useState<ClaimOptionboxState>({
    itemsContainedInOptionbox: null,
    itemsEntitlementStatus: null,
    itemsEntitlementStatusError: null,
    itemsEntitlementStatusFetchStatus: FetchStatus.IDLE,

    claimedEntitlement: null,
    claimedEntitlementFetchStatus: FetchStatus.IDLE,
    claimedEntitlementError: null
  })

  const fetchItemsFromOwnedOptionboxes = useCallback(
    async ({
      optionboxEntitlement,
      userId
    }: {
      optionboxEntitlement: EntitlementInfo
      userId: string
    }): Promise<HookDataReturns<Pick<ClaimOptionboxState, 'itemsEntitlementStatus' | 'itemsContainedInOptionbox'>>> => {
      let nextItemEntitlementStatus: ClaimOptionboxState['itemsEntitlementStatus'] = null
      let nextItemsContainedInOptionbox: ClaimOptionboxState['itemsContainedInOptionbox'] = null
      let nextError: FetchErrorType | null = null

      try {
        setState(oldState => ({
          ...oldState,
          itemsEntitlementStatusFetchStatus: FetchStatus.FETCHING,
          itemsEntitlementStatusError: null
        }))

        const itemId = optionboxEntitlement?.itemId
        const region = optionboxEntitlement.itemSnapshot?.region

        const fetchCurrentOptionboxItem = await Platform.ItemApi(sdk).getLocale_ByItemId(itemId, { region })

        const itemIds = fetchCurrentOptionboxItem.optionBoxConfig?.boxItems?.map(({ itemId }) => itemId as string) || []

        nextItemsContainedInOptionbox = await Platform.ItemApi(sdk).getItemsLocaleByIds({
          region,
          itemIds: itemIds.toString()
        })

        const entitlementOwnership = await Platform.EntitlementApi(sdk).getEntitlementsOwnershipByItemIds_ByUserId(userId, { ids: itemIds })

        nextItemEntitlementStatus = new Map(
          entitlementOwnership.filter(ownership => !!ownership.itemId).map(ownership => [ownership.itemId as string, ownership])
        )

        return {
          data: {
            itemsEntitlementStatus: nextItemEntitlementStatus,
            itemsContainedInOptionbox: nextItemsContainedInOptionbox
          }
        }
      } catch (err) {
        nextError = WidgetErrorHelper.getErrorType(err)
        return { error: nextError }
      } finally {
        setState(oldState => ({
          ...oldState,
          itemsEntitlementStatus: nextItemEntitlementStatus,
          itemsContainedInOptionbox: nextItemsContainedInOptionbox,
          itemsEntitlementStatusFetchStatus: FetchStatus.IDLE,
          itemsEntitlementStatusError: nextError
        }))
      }
    },
    [sdk]
  )

  const claimOptionboxItem = useCallback(
    async ({
      itemId,
      selectedOptionbox,
      userId
    }: {
      itemId: string
      userId: string
      selectedOptionbox: EntitlementInfo
    }): Promise<HookDataReturns<ClaimOptionboxState['claimedEntitlement']>> => {
      let nextClaimedEntitlement: ClaimOptionboxState['claimedEntitlement'] = null
      let nextError: FetchErrorType | null = null

      try {
        setState(oldState => ({
          ...oldState,
          claimedEntitlementError: null,
          claimedEntitlementFetchStatus: FetchStatus.CLAIMING
        }))

        const data: EntitlementDecrement = {
          useCount: 1,
          options: [itemId]
        }

        nextClaimedEntitlement = await Platform.EntitlementApi(sdk).updateDecrement_ByUserId_ByEntitlementId(
          userId,
          selectedOptionbox.id,
          data
        )

        return { data: nextClaimedEntitlement }
      } catch (err) {
        nextError = WidgetErrorHelper.getErrorType(err)
        return { error: nextError }
      } finally {
        setState(oldState => ({
          ...oldState,
          claimedEntitlement: nextClaimedEntitlement
        }))
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      fetchItemsFromOwnedOptionboxes,
      claimOptionboxItem
    }
  }
}

// Helper functions.
const LIMIT = 100

async function fetchCodes(sdk: AccelbyteSDK): Promise<ItemInfo[] | null> {
  let hasNext = false
  let offset = 0
  let allItems: ItemInfo[] | null = null

  do {
    const result = await Platform.ItemApi(sdk).getItemsByCriteria({
      offset,
      limit: LIMIT,
      itemType: ItemType.enum.CODE
    })
    hasNext = !!result.paging?.next
    offset += LIMIT

    if (!allItems) allItems = []
    allItems = allItems.concat(result.data)
  } while (hasNext)

  return allItems
}

async function fetchProductKeys({ sdk, userId, page }: { sdk: AccelbyteSDK; userId: string; page: number }) {
  const productKeyResult = await Platform.EntitlementApi(sdk).getEntitlements_ByUserId(userId, {
    offset: getOffset(page),
    limit: getLimit(),
    entitlementClazz: ItemType.enum.CODE
  })
  return productKeyResult
}

function getLimit(pageSize = 10) {
  return pageSize
}

function getOffset(page: number, pageSize?: number): number {
  return page ? (page - 1) * getLimit(pageSize) : 0
}
