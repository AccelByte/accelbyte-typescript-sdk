/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { BackLinkIcon } from '@od-components/components/Icons/BackLinkIcon'
import { getCurrentLanguage } from '@od-components/i18n/i18n'
import { VerificationCodeContext } from '@od-shared/models/AccountTypes'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import { DesktopChecker } from '@accelbyte/sdk'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import './ChangeEmailPage.scss'
import { VerifyCodeForm } from './VerifyCodeForm'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useInputValidations } from '~/hooks/iam/useInputValidations'
import { useUserVerification } from '~/hooks/iam/useUserVerification'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useAppState } from '~/hooks/useAppState'
import { FetchStatus } from '~/constants/fetch-statuses'

enum ChangeEmailStep {
  verifyCode = 'verifyCode',
  inputNewEmail = 'inputNewEmail'
}

interface State {
  alert: AlertValue | null
  step: ChangeEmailStep
}

export const ChangeEmailPage = () => {
  const [state, setState] = useState<State>({
    alert: null,
    step: ChangeEmailStep.verifyCode
  })

  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()
  const { state: userState, mutations: userMutations } = useUserInfo()
  const { mutations: inputValidationsMutations } = useInputValidations()
  const { state: userVerificationState, mutations: userVerificationMutations } = useUserVerification()
  const appState = useAppState()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  // useEffect(() => {
  //   UIEvent.updateBackground(`url(${bgCommon})`)

  //   return () => {
  //     UIEvent.updateBackground(null)
  //   }
  // }, [])

  useEffect(() => {
    getInputValidations()
    notifyFirstVerificationCodeSent()
  }, [])

  const getInputValidations = async () => {
    const result = await inputValidationsMutations.fetchValidations(getCurrentLanguage())
    if (result.error) {
      setErrorAlert(result.error)
    }
  }

  const dismissAlert = () => {
    updateState({ alert: null })
  }

  const setSentSuccessAlert = (): void => {
    updateState({
      alert: {
        type: AlertType.success,
        element: <Trans i18nKey="ChangeEmailPage.verifyCodeForm.codeSent">A verification code has been sent to your email</Trans>
      }
    })
  }

  const setErrorAlert = async (error: Error) => {
    const isValidationOutdated = await inputValidationsMutations.refetchIfValidationError(error)
    if (isValidationOutdated) {
      updateState({ alert: null })
      return
    }

    updateState({
      alert: {
        type: AlertType.danger,
        element: <CommonError error={error} />
      }
    })
  }

  const notifyFirstVerificationCodeSent = (): void => {
    const codeSent = UrlUtils.silentSearchParamsBuilder(historyState.location.search).has('codeSent')

    if (codeSent) {
      setSentSuccessAlert()
      historyState.replace(location.pathname)
    }
  }

  const notifyVerificationCodeSent = (): void => {
    setSentSuccessAlert()
  }

  const updateEmailAndRedirectToVerifyPage = async (code: string, newEmail: string): Promise<void> => {
    const result = await userMutations.updateEmail(code, newEmail)
    if (result.error) {
      setErrorAlert(result.error)
      return
    }

    if (!DesktopChecker.isDesktopApp()) {
      await appState.fetchAllUserInformation()
    } else {
      await appState.refreshUser()
      historyState.replace(historyState.location.pathname)
    }
  }

  const sendVerificationCode = async () => {
    const user = userState.user
    const result = await userVerificationMutations.sendVerificationCode(
      user?.emailAddress || '',
      VerificationCodeContext.enum.UpdateEmailAddress
    )
    if (result.error) {
      setErrorAlert(result.error)
      return
    }

    notifyVerificationCodeSent()
  }

  return (
    <div className="changeEmailPage">
      <div className="changeEmailPageContainer">
        <main>
          <div className="navigationContainer">
            <Link to={routesState.account.profile.link} className="btnBack">
              <BackLinkIcon />
              <p className="backText">
                <Trans i18nKey="Navigation.editHistory.backlink">Back to Profile</Trans>
              </p>
            </Link>
          </div>
          <div className="changeEmailSubPage">
            <VerifyCodeForm
              email={userState.user?.emailAddress || ''}
              isRequestingCode={userVerificationState.fetchVerificationStatus === FetchStatus.REQUESTING}
              onResendCode={sendVerificationCode}
              onUpdateEmail={updateEmailAndRedirectToVerifyPage}
              alert={state.alert}
              onDismissAlert={dismissAlert}
              oldEmail={userState.user?.emailAddress || ''}
              isUpdatingEmail={userState.fetchUserStatus === FetchStatus.UPDATING}
            />
          </div>
        </main>
      </div>
    </div>
  )
}
