/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { getCurrentLanguage } from '@od-components/i18n/i18n'
import { VerificationCodeContext } from '@od-shared/models/AccountTypes'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import './UpdatingEmailVerification.scss'
import { UpdatingEmailVerificationForm } from './UpdatingEmailVerificationForm'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useUserVerification } from '~/hooks/iam/useUserVerification'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { useHistory } from '~/hooks/routes/useHistory'
import { useAppState } from '~/hooks/useAppState'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { VerifyCodeForm } from '../ChageEmail/VerifyCodeForm'
import { FetchStatus } from '~/constants/fetch-statuses'
import { EligibleUser } from '@accelbyte/sdk-iam'

enum UpdatingEmailVerificationStep {
  inputNewEmail = 'inputNewEmail',
  verifyCodeNewEmail = 'verifyCodeNewEmail'
}

interface Props {
  setIsLogoutAvailable: (isAvailable: boolean) => void
}

interface State {
  verificationCode: string
  alert: AlertValue | null
  step: UpdatingEmailVerificationStep
  isVerificationSuccess: boolean
}

export const UpdatingEmailVerification = (props: Props) => {
  const [state, setState] = useState<State>({
    step: UpdatingEmailVerificationStep.verifyCodeNewEmail,
    verificationCode: '',
    alert: null,
    isVerificationSuccess: false
  })

  const { state: userState, mutations: userMutations } = useUserInfo()
  const { state: userVerificationState, mutations: userVerificationMutations } = useUserVerification()
  const { state: inputValidationsState, mutations: inputValidationsMutations } = useInputValidations()
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()
  const appState = useAppState()

  useEffect(() => {
    const searchParams = new URLSearchParams(historyState.location?.search)
    getInputValidations()
    if (searchParams.get('isChangingEmail')) {
      setState(oldState => ({ ...oldState, step: UpdatingEmailVerificationStep.inputNewEmail }))
    }
  }, [])

  const getInputValidations = async () => {
    const result = await inputValidationsMutations.fetchValidations()
    if (result.error) {
      setErrorAlert(result.error)
    }
  }

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const onVerificationCodeSent = (): void => {
    updateState({
      alert: {
        type: AlertType.success,
        element: <Trans i18nKey="ChangeEmailPage.verifyCodeForm.codeSent">A verification code has been sent to your email</Trans>
      }
    })
  }

  const setErrorAlert = async (error: Error | unknown) => {
    if (inputValidationsState.validationsError) {
      await inputValidationsMutations.refetchIfValidationError(inputValidationsState.validationsError)
    }

    updateState({
      alert: {
        type: AlertType.danger,
        element: <CommonError error={error} />
      }
    })
  }

  const verifyCode = async (code: string) => {
    const result = await userVerificationMutations.verify(code, getCurrentLanguage())
    if (result.error) {
      updateState({
        alert: {
          type: AlertType.danger,
          element: <CommonError error={result.error} />
        },
        isVerificationSuccess: false
      })

      return
    }

    updateState({ isVerificationSuccess: true })
    await appState.fetchAllUserInformation()
    historyState.push(routesState.account.profile.link, { updateEmailStatus: 'success' })
  }

  const dismissAlert = (): void => {
    updateState({ alert: null })
  }

  const goToChangeEmail = async () => {
    const { setIsLogoutAvailable } = props
    const user = userState.user
    const oldEmail = user?.oldEmailAddress || user?.emailAddress || ''

    const result = await userVerificationMutations.sendVerificationCode(oldEmail, VerificationCodeContext.enum.UpdateEmailAddress)

    if (result.error) {
      setErrorAlert(result.error)
      return
    }

    onVerificationCodeSent()
    updateState({ step: UpdatingEmailVerificationStep.inputNewEmail })
    dismissAlert()
    historyState.push(`${historyState.location.pathname}?isChangingEmail=true`)
    setIsLogoutAvailable(false)
  }

  const backToVerifyCode = () => {
    const { setIsLogoutAvailable } = props

    updateState({ step: UpdatingEmailVerificationStep.verifyCodeNewEmail })
    dismissAlert()
    historyState.push(historyState.location.pathname)
    setIsLogoutAvailable(true)
  }

  const updateEmailAndRedirectToVerifyPage = async (code: string, newEmail: string): Promise<void> => {
    const { pathname } = historyState.location
    await userMutations.updateEmail(code, newEmail)
    historyState.push(pathname)
    location.reload()
  }

  const sendVerificationCode = async (email: string) => {
    const result = await userVerificationMutations.sendVerificationCode(email, VerificationCodeContext.enum.UpdateEmailAddress)
    if (result.error) {
      setErrorAlert(result.error)
      return
    }

    onVerificationCodeSent()
  }

  const parseEligibleUser = EligibleUser.safeParse(userState.user)
  if (!parseEligibleUser.success) return null

  const email = parseEligibleUser.data.newEmailAddress || parseEligibleUser.data.emailAddress
  const emailVerified = parseEligibleUser.data.emailVerified
  const oldEmail = parseEligibleUser.data.oldEmailAddress || parseEligibleUser.data.emailAddress

  const isRequestingVerificationCode = userVerificationState.fetchVerificationStatus === FetchStatus.REQUESTING
  const isVerifying = userVerificationState.fetchVerificationStatus === FetchStatus.VERIFYING

  return (
    <div className="newEmailVerification">
      {state.step === UpdatingEmailVerificationStep.verifyCodeNewEmail && (
        <UpdatingEmailVerificationForm
          isRequestingCode={isRequestingVerificationCode}
          isVerifying={isVerifying}
          onResend={() => sendVerificationCode(email)}
          onVerify={async code => {
            await verifyCode(code)
          }}
          onChangeEmail={goToChangeEmail}
          alert={state.alert}
          onDismissAlert={dismissAlert}
          isSuccess={state.isVerificationSuccess}
        />
      )}
      {state.step === UpdatingEmailVerificationStep.inputNewEmail && (
        <VerifyCodeForm
          email={oldEmail}
          isRequestingCode={isRequestingVerificationCode}
          onResendCode={() => sendVerificationCode(oldEmail)}
          onUpdateEmail={updateEmailAndRedirectToVerifyPage}
          alert={state.alert}
          onDismissAlert={dismissAlert}
          oldEmail={oldEmail}
          isUpdatingEmail={userState.fetchUserStatus === FetchStatus.UPDATING}
          isFromEmailVerification={true}
          onCancel={backToVerifyCode}
          emailVerified={emailVerified}
          newEmail={email}
        />
      )}
    </div>
  )
}
