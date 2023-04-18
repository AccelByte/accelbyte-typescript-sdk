/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '../useSdk'
import { useCallback } from 'react'
import { createStore, useStore } from '../useStore'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { HookDataReturns } from '~/models/hook'
import { Basic, CountryObjectArray } from '@accelbyte/sdk-basic'
import { CountryLocationResponse, Iam } from '@accelbyte/sdk-iam'

interface State {
  countries: CountryObjectArray | null
  countriesError: FetchErrorType | null
  countriesFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING

  currentCountryLocation: CountryLocationResponse | null
  currentCountryLocationError: FetchErrorType | null
  currentCountryLocationFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
}

const DEFAULT_STATE: State = {
  countries: null,
  countriesError: null,
  countriesFetchStatus: FetchStatus.IDLE,

  currentCountryLocation: null,
  currentCountryLocationError: null,
  currentCountryLocationFetchStatus: FetchStatus.IDLE
}

const store = createStore(DEFAULT_STATE)

export function useCountries() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(store)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const fetchCountries = useCallback(async (): Promise<HookDataReturns<CountryObjectArray>> => {
    let countries: CountryObjectArray | null = null
    let countriesError: FetchErrorType | null = null

    try {
      setState({ countriesError: null, countriesFetchStatus: FetchStatus.FETCHING })
      countries = await Basic.MiscApi(sdk).getMiscCountries()
      return { data: countries }
    } catch (error) {
      countriesError = WidgetErrorHelper.getErrorType(error)
      return { error: countriesError as Error }
    } finally {
      setState({ countries, countriesError, countriesFetchStatus: FetchStatus.IDLE })
    }
  }, [sdk])

  const fetchCurrentLocationCountry = useCallback(async (): Promise<HookDataReturns<CountryLocationResponse>> => {
    let currentCountryLocation: CountryLocationResponse | null = null
    let currentCountryLocationError: FetchErrorType | null = null

    try {
      setState({ currentCountryLocationError, currentCountryLocationFetchStatus: FetchStatus.FETCHING })
      currentCountryLocation = await Iam.OAuth20ExtensionApi(sdk).getLocationCountry()
      return { data: currentCountryLocation }
    } catch (error) {
      currentCountryLocationError = WidgetErrorHelper.getErrorType(error)
      return { error: currentCountryLocationError }
    } finally {
      setState({
        currentCountryLocation,
        currentCountryLocationError,
        currentCountryLocationFetchStatus: FetchStatus.IDLE
      })
    }
  }, [sdk])

  return {
    state,
    mutations: {
      resetState,
      fetchCountries,
      fetchCurrentLocationCountry
    }
  }
}
