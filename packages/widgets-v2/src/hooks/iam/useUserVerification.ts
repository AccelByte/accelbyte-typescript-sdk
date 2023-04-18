/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '../useSdk'
import { useCallback } from 'react'
import { createStore, useStore } from '../useStore'
import { VerificationCodeContext } from '@od-shared/models/AccountTypes'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { Iam } from '@accelbyte/sdk-iam'

interface UserVerificationState {
  fetchVerificationStatus: FetchStatus.IDLE | FetchStatus.REQUESTING | FetchStatus.VERIFYING
  requestVerificationCodeError: FetchErrorType | null
  verifyError: FetchErrorType | null
}

const DEFAULT_STATE: UserVerificationState = {
  fetchVerificationStatus: FetchStatus.IDLE,
  requestVerificationCodeError: null,
  verifyError: null
}

const store = createStore(DEFAULT_STATE)

export function useUserVerification() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(store)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const resetErrorState = useCallback(() => {
    setState({ requestVerificationCodeError: null, verifyError: null })
  }, [])

  const sendVerificationCode = useCallback(
    async (email: string, context?: VerificationCodeContext): Promise<HookDataReturns<null>> => {
      let requestVerificationCodeError: FetchErrorType | null = null

      try {
        setState({ requestVerificationCodeError: null, fetchVerificationStatus: FetchStatus.REQUESTING })

        await Iam.UsersApi(sdk).createUserMeCodeRequest({ context, emailAddress: email })
        return { data: null }
      } catch (error) {
        requestVerificationCodeError = WidgetErrorHelper.getErrorType(error)
        return { error: requestVerificationCodeError }
      } finally {
        setState({ requestVerificationCodeError, fetchVerificationStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const sendNewUserVerificationCode = useCallback(
    async (email: string): Promise<HookDataReturns<null>> => {
      let requestVerificationCodeError: FetchErrorType | null = null

      try {
        setState({ requestVerificationCodeError: null, fetchVerificationStatus: FetchStatus.REQUESTING })

        await Iam.UsersApi(sdk).createUserCodeRequest({ emailAddress: email })
        return { data: null }
      } catch (error) {
        requestVerificationCodeError = WidgetErrorHelper.getErrorType(error)
        return { error: requestVerificationCodeError }
      } finally {
        setState({ requestVerificationCodeError, fetchVerificationStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const verify = useCallback(
    async (code: string, languageTag: string): Promise<HookDataReturns<string>> => {
      let verifyError: FetchErrorType | null = null

      try {
        setState({ verifyError: null, fetchVerificationStatus: FetchStatus.VERIFYING })

        await Iam.UsersApi(sdk).createUserMeCodeVerify({
          code,
          contactType: 'email',
          languageTag
        })

        return { data: '' } // dataTest
      } catch (error) {
        verifyError = WidgetErrorHelper.getErrorType(error)
        return { error: verifyError }
      } finally {
        setState({ verifyError, fetchVerificationStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      resetState,
      resetErrorState,
      sendVerificationCode,
      sendNewUserVerificationCode,
      verify
    }
  }
}
