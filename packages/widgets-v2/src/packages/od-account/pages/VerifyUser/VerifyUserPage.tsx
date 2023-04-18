/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { CommonError } from '@od-components/components/CommonError'
import { t } from '@od-components/i18n/i18n'
import { getCurrentLanguage } from '@od-components/i18n/index'
// import { UIEvent } from '@od-shared/app-events/UIEvent'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
// import bgCommon from '@od-assets/images/bg-common.svg'
import logo from '@od-assets/images/logo.svg'
import React from 'react'
import { Trans } from 'react-i18next'
import { z } from 'zod'
import { VerifyUserMessage } from './VerifyUserMessage'
import './VerifyUserPage.scss'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useSdk } from '~/hooks/useSdk'
import { useAppState } from '~/hooks/useAppState'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { Iam, IamUserAuthorizationClient } from '@accelbyte/sdk-iam'

const VERIFY_USER_ERROR = z.enum([
  'failed_to_verify_invalid_link',
  'failed_to_verify_server_error',
  'failed_to_verify_user_not_found',
  'failed_to_verify_expired_link'
])
const PAGE_STATE = z.enum(['message', 'checkEmail'])

interface State {
  page: keyof typeof PAGE_STATE.enum
  alert: AlertValue | null
  isResending: boolean
}

export const VerifyUserPage = () => {
  const [state, setState] = React.useState<State>({
    page: PAGE_STATE.enum.message,
    alert: null,
    isResending: false
  })

  const { state: userState } = useUserInfo()
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()
  const [sdk] = useSdk()
  const appState = useAppState()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  // React.useEffect(() => {
  //   UIEvent.updateBackground(`url(${bgCommon})`)

  //   return () => {
  //     UIEvent.updateBackground(null)
  //   }
  // }, [])

  const redirectToLogin = () => {
    const loginURL = new IamUserAuthorizationClient(sdk).createLoginURL()
    window.location.replace(loginURL)
  }

  const redirectToHome = () => {
    historyState.push(routesState.home.link)
  }

  const logoutAndRedirectToLogin = async () => {
    await appState.logout()
    redirectToLogin()
  }

  const resendVerificationLink = async () => {
    try {
      if (state.isResending) return
      updateState({ isResending: true })
      const languageTag = getCurrentLanguage()
      await Iam.UsersApi(sdk).createUserMeVerifyLinkRequest({ languageTag })

      updateState({ page: PAGE_STATE.enum.checkEmail, alert: null })
    } catch (error) {
      updateState({
        alert: {
          type: AlertType.danger,
          element: <CommonError error={error} defaultMessage={t('verifyUserPage.error.alert.resend.failed')} />
        }
      })
    } finally {
      updateState({ isResending: false })
    }
  }

  const dismissAlert = () => {
    updateState({ alert: null })
  }

  const renderAlert = _errorMsg => {
    const { alert } = state
    if (!alert) {
      return null
    }
    return (
      <Alert type={alert.type} onDismiss={dismissAlert} className="mb-4">
        {alert.element}
      </Alert>
    )
  }

  const renderSuccessMessage = () => {
    return (
      <VerifyUserMessage
        isSuccess
        title={t('verifyUserPage.success.title')}
        description={t('verifyUserPage.success.desc')}
        buttonText={t('navigation.links.login')}
        onClickButton={logoutAndRedirectToLogin}
      />
    )
  }

  const renderErrorMessage = (errorMessage: string, email: string) => {
    const user = userState.user
    const isLoggedIn = !!user?.userId
    const userEmail = user?.emailAddress

    const { isResending } = state

    switch (true) {
      case errorMessage === VERIFY_USER_ERROR.enum.failed_to_verify_user_not_found:
        return (
          <VerifyUserMessage
            isSuccess={false}
            title={t('verifyUserPage.error.failed.userNotFound.title')}
            description={t('verifyUserPage.error.failed.userNotFound.desc')}
            buttonText={t('ErrorPage401.buttonAction')}
            onClickButton={redirectToHome}
          />
        )

      case errorMessage === VERIFY_USER_ERROR.enum.failed_to_verify_server_error:
        historyState.push(routesState.error.err500.link)
        return

      case !isLoggedIn:
        return (
          <VerifyUserMessage
            isSuccess={false}
            title={t('verifyUserPage.error.failed.title')}
            description={t('verifyUserPage.error.failed.notLogIn.desc')}
            buttonText={t('navigation.links.login')}
            onClickButton={redirectToLogin}
          />
        )
      case !!email && userEmail !== email:
        return (
          <VerifyUserMessage
            isSuccess={false}
            title={t('verifyUserPage.error.failed.title')}
            description={t('verifyUserPage.error.failed.wrongAccount.desc')}
            buttonText={t('navigation.links.logout')}
            onClickButton={logoutAndRedirectToLogin}
          />
        )

      case errorMessage === VERIFY_USER_ERROR.enum.failed_to_verify_expired_link:
        return (
          <VerifyUserMessage
            isSuccess={false}
            title={t('verifyUserPage.error.expired.title')}
            description={t('verifyUserPage.error.expired.desc')}
            buttonText={t('verifyUserPage.error.button.resend')}
            onClickButton={resendVerificationLink}
            isLoading={isResending}
          />
        )
      case errorMessage === VERIFY_USER_ERROR.enum.failed_to_verify_invalid_link:
      default:
        return (
          <VerifyUserMessage
            isSuccess={false}
            title={t('verifyUserPage.error.invalid.title')}
            description={t('verifyUserPage.error.invalid.desc')}
            buttonText={t('verifyUserPage.error.button.resend')}
            onClickButton={resendVerificationLink}
            isLoading={isResending}
          />
        )
    }
  }

  const renderCheckEmail = () => {
    const email = new URLSearchParams(historyState.location.search).get('email')

    return (
      <div className="text-center">
        <p className="messageTitle mb-4">{t('verifyUserPage.checkEmail.title')}</p>
        <p className="messageDesc">
          <Trans i18nKey="verifyUserPage.checkEmail.desc">
            We have sent a verification email to
            <span className="email">{{ email }}</span>
          </Trans>
        </p>
        <hr className="my-5 text-[color:rgb(var(--od-rgb-text),0.65)]" />
        <p className="messageDesc">{t('verifyUserPage.checkEmail.question')}</p>
        <a onClick={resendVerificationLink} className="cursor-pointer text-sm">
          {t('verifyUserPage.checkEmail.resend')}
        </a>
      </div>
    )
  }

  const { page } = state
  const searchParam = new URLSearchParams(historyState.location.search)
  const isSuccess = searchParam.get('success') === 'true'
  const email = searchParam.get('email') || ''
  const errorMessage = searchParam.get('error_message') || ''

  return (
    <div className="verifyUserPage">
      <div className="verifyUserContainer">
        <div className="flex justify-center">
          <img src={logo} loading="lazy" />
        </div>

        <div className="verifyUserCard">
          {renderAlert(errorMessage)}
          {page === PAGE_STATE.enum.message && (
            <>
              {isSuccess && renderSuccessMessage()}
              {!isSuccess && renderErrorMessage(errorMessage, email)}
            </>
          )}

          {page === PAGE_STATE.enum.checkEmail && renderCheckEmail()}
        </div>
      </div>
    </div>
  )
}
