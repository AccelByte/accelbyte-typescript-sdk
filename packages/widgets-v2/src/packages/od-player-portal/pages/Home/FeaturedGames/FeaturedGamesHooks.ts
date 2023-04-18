/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ItemPagingSlicedResult, CurrencyInfo, Platform } from '@accelbyte/sdk-platform'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useCallback } from 'react'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { createStore, useStore } from '~/hooks/useStore'
import { useSdk } from '~/hooks/useSdk'
import { HookDataReturns } from '~/models/hook'

interface FeaturedGameState {
  featuredGameList: ItemPagingSlicedResult | null
  currencyMap: Map<string, CurrencyInfo> | null
  featuredGameError: FetchErrorType | null
  featuredGameFetchStatus: FetchStatus
}

const DEFAULT_STATE: FeaturedGameState = {
  featuredGameList: null,
  currencyMap: null,
  featuredGameError: null,
  featuredGameFetchStatus: FetchStatus.IDLE
}

export const featureGameStore = createStore(DEFAULT_STATE)

export function useFeaturedGames() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(featureGameStore)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const fetchFeaturedGames = useCallback(
    async (
      country?: string
    ): Promise<HookDataReturns<{ featuredGameList: ItemPagingSlicedResult; currencyMap: Map<string, CurrencyInfo> }>> => {
      let featuredGameList: ItemPagingSlicedResult | null = null
      let currencyMap: Map<string, CurrencyInfo> | null = null
      let featuredGameError: FetchErrorType | null = null

      try {
        setState({ featuredGameError, featuredGameFetchStatus: FetchStatus.FETCHING })

        const [currencyResult, featuredGameResult] = await Promise.all([
          Platform.CurrencyApi(sdk).getCurrencies(),
          Platform.ItemApi(sdk).getItemsByCriteria({
            tags: 'featured',
            limit: 5,
            region: country
          })
        ])

        currencyMap = new Map<string, CurrencyInfo>()
        for (const item of currencyResult) {
          currencyMap.set(item.currencyCode, item)
        }

        featuredGameList = featuredGameResult
        return {
          data: {
            currencyMap,
            featuredGameList
          }
        }
      } catch (error) {
        featuredGameError = WidgetErrorHelper.getErrorType(error)
        return { error: error as Error }
      } finally {
        setState({ featuredGameList, currencyMap, featuredGameError, featuredGameFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      resetState,
      fetchFeaturedGames
    }
  }
}
