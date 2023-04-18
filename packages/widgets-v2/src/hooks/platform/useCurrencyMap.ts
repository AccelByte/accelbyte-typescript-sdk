/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { createStore, useStore } from '../useStore'
import { useSdk } from '../useSdk'
import { useCallback } from 'react'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { HookDataReturns } from '~/models/hook'
import { CurrencyInfo, PlatformClient } from '@accelbyte/sdk-platform'

interface State {
  currencyMap: Map<string, CurrencyInfo> | null
  currencyMapFetchStatus: FetchStatus
  currencyMapError: FetchErrorType | null
}

const DEFAULT_STATE: State = {
  currencyMap: null,
  currencyMapFetchStatus: FetchStatus.IDLE,
  currencyMapError: null
}

const currencyMapStore = createStore(DEFAULT_STATE)

export function useCurrencyMap() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(currencyMapStore)

  const fetchCurrencyMap = useCallback(async (): Promise<HookDataReturns<State['currencyMap']>> => {
    let nextCurrencyMap: State['currencyMap'] = null
    let nextCurrencyMapError: State['currencyMapError'] = null

    try {
      setState({
        currencyMapFetchStatus: FetchStatus.FETCHING,
        currencyMapError: null
      })

      nextCurrencyMap = await PlatformClient.getCurrencyMap(sdk)
      return { data: nextCurrencyMap }
    } catch (error) {
      nextCurrencyMapError = WidgetErrorHelper.getErrorType(error)
      return { error: nextCurrencyMapError }
    } finally {
      setState({
        currencyMap: nextCurrencyMap,
        currencyMapError: nextCurrencyMapError,
        currencyMapFetchStatus: FetchStatus.IDLE
      })
    }
  }, [sdk])

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  return {
    state,
    mutations: {
      fetchCurrencyMap,
      resetState
    }
  }
}
