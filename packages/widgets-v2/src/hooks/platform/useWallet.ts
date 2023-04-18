/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccelbyteSDK } from '@accelbyte/sdk'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { createStore, useStore } from '../useStore'
import { useCallback } from 'react'
import { useSdk } from '../useSdk'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { CurrencyType, ItemType } from '@od-shared/models/EcommTypes'
import { PurchaseHelper } from '@od-shared/utils/PurchaseHelper'
import { RegionDataItemHelper } from '@od-shared/utils/RegionDataItemHelper'
import { ItemSortType } from '~/packages/od-ecommerce/models/items'
import { FeatureFlagsType } from '@od-shared/FeatureFlags'
import { Env } from '@od-shared/Env'
import { HookDataReturns } from '~/models/hook'
import { CurrencyInfo, ItemInfo, Platform, PlatformWallet, RegionDataItem } from '@accelbyte/sdk-platform'
import { UserResponseV3 } from '@accelbyte/sdk-iam'

interface State {
  wallet: PlatformWallet | null
  walletFetchStatus: FetchStatus
  walletError: FetchErrorType | null

  coins: ItemInfo[] | null
  coinsFetchStatus: FetchStatus
  coinsError: FetchErrorType | null
}

const DEFAULT_STATE: State = {
  wallet: null,
  walletFetchStatus: FetchStatus.IDLE,
  walletError: null,
  coins: null,
  coinsFetchStatus: FetchStatus.IDLE,
  coinsError: null
}
const COIN_LIMIT = 50

const walletStore = createStore(DEFAULT_STATE)

export function useWallet() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(walletStore)

  const fetchWallet = useCallback(
    async (userId: string, virtualCurrencyCode?: string): Promise<HookDataReturns<PlatformWallet> | null> => {
      if (!virtualCurrencyCode) return null

      let nextWallet: State['wallet'] = null
      let nextWalletError: State['walletError'] = null

      try {
        setState({
          walletFetchStatus: FetchStatus.FETCHING,
          walletError: null
        })

        nextWallet = await Platform.WalletApi(sdk).getWallet_ByUserId_ByCurrencyCode(userId, virtualCurrencyCode)
        return { data: nextWallet }
      } catch (error) {
        if (ErrorHelper.isAxiosError(error)) {
          if (error.response?.status === 404) {
            // null if wallet response is 404 - missing wallet
            return null
          }
        }
        nextWalletError = WidgetErrorHelper.getErrorType(error)
        return { error: nextWalletError }
      } finally {
        setState({ wallet: nextWallet, walletError: nextWalletError, walletFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const refreshWallet = useCallback(
    (user: UserResponseV3 | null, flags: FeatureFlagsType | null) => {
      if (!user || !flags?.isVirtualCurrencyVisible) return
      return fetchWallet(user.userId, Env.WALLET_VIRTUAL_CURRENCY_CODE)
    },
    [sdk]
  )

  const fetchCoinsList = useCallback(
    async (
      user: UserResponseV3 | null,
      currencyMap: Map<string, CurrencyInfo> | null
    ): Promise<HookDataReturns<State['coins'] | null> | undefined> => {
      if (!user || !currencyMap) return

      let nextCoins: State['coins'] = null
      let nextCoinsError: State['coinsError'] = null

      try {
        setState({
          coinsFetchStatus: FetchStatus.FETCHING,
          coinsError: null
        })
        nextCoins = await getCoinsListFromAPI(sdk, user, currencyMap)
        return { data: nextCoins }
      } catch (err) {
        nextCoinsError = WidgetErrorHelper.getErrorType(err)
        return { error: err as Error }
      } finally {
        setState({ coins: nextCoins, coinsError: nextCoinsError, coinsFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const purchaseCoin = useCallback(
    async (
      user: UserResponseV3 | null,
      selectedItem: ItemInfo,
      regionDataItem: RegionDataItem,
      returnUrl: string
    ): Promise<HookDataReturns<null> | undefined> => {
      if (!user) return

      let nextCoinsError: State['coinsError'] = null

      try {
        setState({ coinsFetchStatus: FetchStatus.UPDATING })

        await Platform.OrderApi(sdk).createOrder_ByUserId(user.userId, {
          itemId: selectedItem.itemId,
          quantity: 1,
          price: regionDataItem.price || 0,
          discountedPrice: RegionDataItemHelper.getFinalPrice(regionDataItem),
          currencyCode: regionDataItem.currencyCode,
          // returnUrl: `${location.protocol}//${location.host}${Env.PLAYER_PORTAL_BASE_URL}`
          returnUrl
        })

        return { data: null }
      } catch (err) {
        nextCoinsError = WidgetErrorHelper.getErrorType(err)
        return { error: err as Error }
      } finally {
        setState({ coinsError: nextCoinsError, coinsFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  return {
    state,
    mutations: {
      fetchWallet,
      fetchCoinsList,
      purchaseCoin,
      refreshWallet,
      resetState
    }
  }
}

// Helper functions.
async function getCoinsListFromAPI(sdk: AccelbyteSDK, user: UserResponseV3 | null, currencyMap: Map<string, CurrencyInfo>) {
  if (!user) return null

  let coinsConcat: ItemInfo[] = []
  let hasNext = true
  let offset = 0

  try {
    while (hasNext) {
      let result
      try {
        result = await Platform.ItemApi(sdk).getItemsByCriteria({
          itemType: ItemType.enum.COINS,
          region: user.country,
          limit: COIN_LIMIT,
          sortBy: ItemSortType.DISPLAY_ORDER_ASC,
          offset
        })
      } catch (error) {
        hasNext = false
        throw error
      }

      const { data, paging } = result
      hasNext = Boolean(paging && paging.next)

      const coins = data.filter(maybeCoin => {
        const { targetCurrencyCode } = maybeCoin
        if (!targetCurrencyCode) return false
        const currency = currencyMap.get(targetCurrencyCode)
        return (
          currency &&
          currency.currencyType === CurrencyType.enum.VIRTUAL &&
          !!maybeCoin.useCount &&
          PurchaseHelper.makePaymentOptionList(maybeCoin.regionData || [], currencyMap).length > 0
        )
      })

      coinsConcat = coinsConcat.concat(coins)
      offset += COIN_LIMIT
    }
  } catch (err) {
    console.error(err)
  }

  return coinsConcat
}
