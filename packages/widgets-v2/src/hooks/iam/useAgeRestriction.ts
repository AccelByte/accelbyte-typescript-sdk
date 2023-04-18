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
import { Iam } from '@accelbyte/sdk-iam'

interface State {
  ageRestriction: { age: number; countryName: string }
  ageRestrictionError: FetchErrorType | null
  ageRestrictionFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
}

const DEFAULT_STATE: State = {
  ageRestriction: {
    age: 0,
    countryName: ''
  },
  ageRestrictionError: null,
  ageRestrictionFetchStatus: FetchStatus.IDLE
}

const store = createStore(DEFAULT_STATE)

export function useAgeRestriction() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(store)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const fetchAgeRestrictionByCountry = useCallback(
    async (countryCode: string): Promise<HookDataReturns<State['ageRestriction']>> => {
      let ageRestriction: State['ageRestriction'] = DEFAULT_STATE.ageRestriction
      let ageRestrictionError: FetchErrorType | null = null

      try {
        setState({ ageRestrictionError, ageRestrictionFetchStatus: FetchStatus.FETCHING })

        const countryResp = await Iam.UsersApi(sdk).getAgerestrictionCountry_ByCountryCode(countryCode)

        const { ageRestriction: age, countryName, enable } = countryResp
        ageRestriction = {
          age: enable ? age : 0,
          countryName
        }
        return { data: ageRestriction }
      } catch (error) {
        ageRestrictionError = WidgetErrorHelper.getErrorType(error)
        return { error: ageRestrictionError as Error }
      } finally {
        setState({ ageRestriction, ageRestrictionError, ageRestrictionFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      resetState,
      fetchAgeRestrictionByCountry
    }
  }
}
