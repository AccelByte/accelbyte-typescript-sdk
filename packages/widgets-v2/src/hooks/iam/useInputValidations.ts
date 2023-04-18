/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { VALIDATION_ERROR_CODE } from '@accelbyte/sdk'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '../useSdk'
import { useCallback } from 'react'
import { createStore, useStore } from '../useStore'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { InputValidationDataPublic, Iam } from '@accelbyte/sdk-iam'

interface State {
  validations: InputValidationDataPublic[]
  version: number
  validationsError: FetchErrorType | null
  validationsFetchStatus: FetchStatus.IDLE | FetchStatus.FETCHING
  isValidationOutdated: boolean
}

const DEFAULT_STATE: State = {
  validations: [],
  version: 0,
  validationsError: null,
  validationsFetchStatus: FetchStatus.IDLE,
  isValidationOutdated: false
}

const store = createStore(DEFAULT_STATE)

export function useInputValidations() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(store)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const fetchValidations = useCallback(
    async (languageCode?: string): Promise<HookDataReturns<{ validations: InputValidationDataPublic[]; version: number }>> => {
      let validations: InputValidationDataPublic[] = []
      let validationsError: FetchErrorType | null = null
      let version = 0

      try {
        setState({ validationsError: null, validationsFetchStatus: FetchStatus.FETCHING })

        const result = await Iam.InputValidationsApi(sdk).getInputValidations({ languageCode })

        validations = result.data
        version = result.version

        return {
          data: { validations, version }
        }
      } catch (error) {
        validationsError = WidgetErrorHelper.getErrorType(error)
        return { error: validationsError }
      } finally {
        setState({ validations, validationsError, validationsFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const refetchIfValidationError = useCallback(
    async (error: Error): Promise<boolean> => {
      if (ErrorHelper.isAxiosError(error) && ErrorHelper.extractServiceErrorCode(error) === VALIDATION_ERROR_CODE) {
        const currentVersion = state.version
        const result = await fetchValidations()
        if (result.error) return false

        setState({ isValidationOutdated: currentVersion !== result.data.version })
        return currentVersion !== result.data.version
      }

      setState({ isValidationOutdated: false })
      return false
    },
    [sdk, state.version]
  )

  return {
    state,
    mutations: {
      resetState,
      fetchValidations,
      refetchIfValidationError
    }
  }
}
