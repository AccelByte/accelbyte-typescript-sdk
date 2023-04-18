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
import {
  AcceptAgreementRequest,
  AcceptAgreementResponse,
  Legal,
  LegalHelper,
  RetrieveAcceptedAgreementResponse,
  RetrievePolicyPublicResponseArray,
  RetrieveUserEligibilitiesResponseArray
} from '@accelbyte/sdk-legal'

interface LegalState {
  eligibilities: RetrieveUserEligibilitiesResponseArray | null
  eligibilitiesError: FetchErrorType | null
  eligibilitiesFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING

  policiesByCountry: RetrievePolicyPublicResponseArray | null
  policiesError: FetchErrorType | null
  policiesFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING

  bulkAcceptPoliciesError: FetchErrorType | null
  bulkAcceptPoliciesFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING

  acceptedAgreements: RetrieveAcceptedAgreementResponse[] | null
  acceptedAgreementsError: FetchErrorType | null
  acceptedAgreementsFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
}

const DEFAULT_STATE: LegalState = {
  eligibilities: null,
  eligibilitiesError: null,
  eligibilitiesFetchStatus: FetchStatus.IDLE,

  policiesByCountry: null,
  policiesError: null,
  policiesFetchStatus: FetchStatus.IDLE,

  bulkAcceptPoliciesError: null,
  bulkAcceptPoliciesFetchStatus: FetchStatus.IDLE,

  acceptedAgreements: null,
  acceptedAgreementsError: null,
  acceptedAgreementsFetchStatus: FetchStatus.IDLE
}

export const legalStore = createStore(DEFAULT_STATE)

export function useLegal() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(legalStore)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const fetchUnsignedPolicies = useCallback(async (): Promise<HookDataReturns<RetrieveUserEligibilitiesResponseArray>> => {
    let eligibilities: RetrieveUserEligibilitiesResponseArray | null = null
    let eligibilitiesError: FetchErrorType | null = null

    try {
      setState({ eligibilitiesError: null, eligibilitiesFetchStatus: FetchStatus.FETCHING })

      const result = await Legal.EligibilitiesApi(sdk).getEligibility_ByNamespace()

      eligibilities = LegalHelper.getUnsignedPolicies(result)
      return { data: eligibilities }
    } catch (error) {
      eligibilitiesError = WidgetErrorHelper.getErrorType(error)
      return { error: eligibilitiesError }
    } finally {
      setState({ eligibilities, eligibilitiesError, eligibilitiesFetchStatus: FetchStatus.IDLE })
    }
  }, [sdk])

  const fetchPoliciesList = useCallback(
    async (country: string, defaultOnEmpty = true): Promise<HookDataReturns<RetrievePolicyPublicResponseArray>> => {
      let policiesByCountry: RetrievePolicyPublicResponseArray | null = null
      let policiesError: FetchErrorType | null = null

      try {
        setState({ policiesError: null, policiesFetchStatus: FetchStatus.FETCHING })

        policiesByCountry = await Legal.PoliciesApi(sdk).getPolicyCountry_ByCountryCode_ByNS(country, { defaultOnEmpty })
        return { data: policiesByCountry }
      } catch (error) {
        policiesError = WidgetErrorHelper.getErrorType(error)
        return { error: policiesError }
      } finally {
        setState({ policiesByCountry, policiesError, policiesFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const bulkAcceptPolicies = useCallback(
    async (acceptedAgreements: AcceptAgreementRequest[]): Promise<HookDataReturns<AcceptAgreementResponse>> => {
      let bulkAcceptPoliciesError: FetchErrorType | null = null

      try {
        setState({ bulkAcceptPoliciesError: null, bulkAcceptPoliciesFetchStatus: FetchStatus.FETCHING })

        const result = await Legal.AgreementApi(sdk).createAgreementPolicy(acceptedAgreements)

        return { data: result }
      } catch (error) {
        bulkAcceptPoliciesError = WidgetErrorHelper.getErrorType(error)
        return { error: bulkAcceptPoliciesError }
      } finally {
        setState({ bulkAcceptPoliciesError, bulkAcceptPoliciesFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const fetchAcceptedAgreements = useCallback(async (): Promise<HookDataReturns<RetrieveAcceptedAgreementResponse[]>> => {
    let acceptedAgreements: RetrieveAcceptedAgreementResponse[] | null = null
    let acceptedAgreementsError: FetchErrorType | null = null

    try {
      setState({ acceptedAgreementsError: null, acceptedAgreementsFetchStatus: FetchStatus.FETCHING })

      acceptedAgreements = await Legal.AgreementApi(sdk).getAgreementsPolicies()
      return { data: acceptedAgreements }
    } catch (error) {
      acceptedAgreementsError = WidgetErrorHelper.getErrorType(error)
      return { error: acceptedAgreementsError }
    } finally {
      setState({ acceptedAgreements, acceptedAgreementsError, acceptedAgreementsFetchStatus: FetchStatus.IDLE })
    }
  }, [sdk])

  return {
    state,
    mutations: {
      resetState,
      fetchUnsignedPolicies,
      fetchPoliciesList,
      bulkAcceptPolicies,
      fetchAcceptedAgreements
    }
  }
}
