/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

/* eslint-disable camelcase */

import { Iam, IamUserAuthorizationClient, TWOFA_PAGE, Verify2FAParam } from '@accelbyte/sdk-iam'
import { Alert } from '@od-components/components/Alert/Alert'
import { HeaderAlerts } from '@od-components/components/Alert/HeaderAlerts'
import { CommonError } from '@od-components/components/CommonError'
import { AuthAppIcon } from '@od-components/components/Icons/AuthAppIcon'
import { BackupCodeIcon } from '@od-components/components/Icons/BackupCodeIcon'
import { EmailIcon } from '@od-components/components/Icons/EmailIcon'
import { t } from '@od-components/i18n/i18n'
// import { UIEvent } from '@od-shared/app-events/UIEvent'
import { UrlConstants } from '@od-shared/constants/UrlConstants'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
// import bgCommon from '@od-assets/images/bg-common.svg'
import logo from '@od-assets/images/logo.svg'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { z } from 'zod'
import './2FA.scss'
import { CodeInput } from './CodeInput'
import { MethodOption } from './MethodOption'
import { PageContent } from './PageContent'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useSdk } from '~/hooks/useSdk'
import { useAppState } from '~/hooks/useAppState'
import { useHeaderAlerts } from '~/hooks/header/useHeaderAlerts'
import { useHistory } from '~/hooks/routes/useHistory'
import { DesktopChecker } from '@accelbyte/sdk'

const MFA_PAGE_STORAGE_KEY = 'mfaPage'
const AUTHENTICATOR_CODE_LENGTH = 6
const BACKUP_CODE_LENGTH = 8
const EMAIL_CODE_LENGTH = 6
const MFA_ERROR_TYPE = z.enum(['invalid_code', 'invalid_factor', 'invalid_mfa_token', 'code_expired'])

const MFAError = z.object({
  error: z.string(),
  error_description: z.string()
})

const getDisplayedError = (error: unknown) => {
  try {
    if (ErrorHelper.isAxiosError(error)) {
      const errorResponse = MFAError.parse(error?.response?.data)
      switch (errorResponse.error) {
        case MFA_ERROR_TYPE.Enum.invalid_code:
          return <Trans i18nKey="twoFAPage.error.invalidCode">Sorry, the code you entered is invalid. Please try again.</Trans>
        case MFA_ERROR_TYPE.Enum.code_expired:
          return <Trans i18nKey="twoFAPage.error.codeExpired">Sorry, the code you entered is expired. Please try again.</Trans>
        case MFA_ERROR_TYPE.Enum.invalid_factor:
        case MFA_ERROR_TYPE.Enum.invalid_mfa_token:
          return (
            <Trans i18nKey="twoFAPage.error.invalidFactor">
              Failed to complete the request. Please click the back to login button below, and try logging in again.
            </Trans>
          )
      }
    }
    throw error
  } catch (e) {
    return <CommonError error={error} />
  }
}

export const TwoFactorAuthentication = () => {
  const [page, setPage] = useState<TWOFA_PAGE>()
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState<AlertValue | null>()

  const [sdk] = useSdk()
  const { state: historyState } = useHistory()
  const { state: userState, mutations: userMutations } = useUserInfo()
  const { mutations: headerAlertsMutations } = useHeaderAlerts()
  const appState = useAppState()

  const factors = userState.mfaData?.factors || []

  useEffect(() => {
    // UIEvent.updateBackground(`url(${bgCommon})`)

    const defaultFactor = userState.mfaData?.defaultFactor
    const storedPage = sessionStorage.getItem(MFA_PAGE_STORAGE_KEY) as TWOFA_PAGE
    setPage(storedPage || defaultFactor || TWOFA_PAGE.enum.options)
  }, [])

  const changePage = (page: TWOFA_PAGE) => {
    setPage(page)
    sessionStorage.setItem(MFA_PAGE_STORAGE_KEY, page)
  }

  const onTryAnother = () => {
    changePage(TWOFA_PAGE.enum.options)
  }

  const dismissAlert = () => {
    setAlert(null)
  }

  const submitCode = async (param: Verify2FAParam) => {
    if (isLoading) return

    try {
      setIsLoading(true)

      const result = await userMutations.verify2FA(param)
      if (result) {
        if (result.error) throw result.error

        appState.refreshSession(result.data.access_token, result.data.refresh_token)
        await appState.refreshUser()
        userMutations.removeMFAData()

        if (userState.isLinkingAccountRequired2FA) {
          headerAlertsMutations.push({
            type: AlertType.success,
            element: <Trans i18nKey="LinkPlatformAccountPage.notification.accountLinked">Account linked</Trans>
          })
          userMutations.clearLinkAccountRequired2FA()
        }
      }
    } catch (error) {
      if (ErrorHelper.isAxiosNetworkError(error)) {
        headerAlertsMutations.push({
          type: AlertType.danger,
          element: t('CommonError.networkError')
        })
        return
      }
      const displayedError = getDisplayedError(error)
      setAlert({ type: AlertType.danger, element: displayedError })
    } finally {
      setIsLoading(false)
    }
  }

  const requestEmailCode = async (isResend?: boolean) => {
    if (isLoading || !userState.mfaData) return

    try {
      setIsLoading(true)
      await Iam.OAuth20Api(sdk).postOauthMfaCode({
        mfaToken: userState.mfaData.mfaToken,
        factor: 'email',
        clientId: sdk.assembly().clientId
      })
      if (isResend) {
        setAlert({ type: AlertType.success, element: t('twoFAPage.email.resend.success') })
      }
      setPage(TWOFA_PAGE.enum.email)
    } catch (error) {
      if (ErrorHelper.isAxiosNetworkError(error)) {
        headerAlertsMutations.push({
          type: AlertType.danger,
          element: t('CommonError.networkError')
        })
        return
      }
      setAlert({ type: AlertType.danger, element: <CommonError error={error} /> })
    } finally {
      setIsLoading(false)
    }
  }

  const getCodeLength = (factor: string) => {
    switch (factor) {
      case TWOFA_PAGE.enum.backupCode:
        return BACKUP_CODE_LENGTH
      case TWOFA_PAGE.enum.authenticator:
        return AUTHENTICATOR_CODE_LENGTH
      default:
        return EMAIL_CODE_LENGTH
    }
  }

  const renderHelperTextEmail = () => {
    return (
      <div className="mt-3 text-[13px]">
        <span>{t('AccountPasswordSecurity.2fa.emailModal.helperText')}</span>
        <span className="ml-1 cursor-pointer text-blue-50" onClick={() => requestEmailCode(true)}>
          {t('AccountPasswordSecurity.2fa.emailModal.resendBtn')}
        </span>
      </div>
    )
  }

  const renderCodeInput = (factor: string, helperText?: React.ReactNode) => {
    const factors = userState.mfaData?.factors || []
    return (
      <CodeInput
        onTryAnother={factors.length > 1 ? onTryAnother : undefined}
        codeLength={getCodeLength(factor)}
        factor={factor}
        onSubmit={submitCode}
        isSubmitting={isLoading}
        helperText={helperText}
      />
    )
  }

  const resetMFADataAndLogout = () => {
    sessionStorage.removeItem(MFA_PAGE_STORAGE_KEY)
    userMutations.removeMFAData()
    appState.logout()
    if (!DesktopChecker.isDesktopApp()) {
      const loginURL = new IamUserAuthorizationClient(sdk).createLoginURL(historyState.location.pathname)
      window.location.replace(loginURL)
    }
  }

  return (
    <div className="twoFAPage">
      <HeaderAlerts className="twoFAAlert" />

      <div className="twoFAContainer">
        <div className="flex justify-center">
          <img src={logo} loading="lazy" />
        </div>

        <div className="twoFAForm">
          {page === TWOFA_PAGE.enum.authenticator && (
            <PageContent
              title={t('twoFAPage.authenticator.title')}
              description={
                <Trans i18nKey="twoFAPage.authenticator.description">
                  Please enter the security code from your authenticator app.
                  <a href={UrlConstants.DOCS_FAQ_URL} target="_blank" rel="noreferrer">
                    Learn more
                  </a>
                </Trans>
              }
              withAlert
              alert={alert}
              onDismissAlert={dismissAlert}>
              {renderCodeInput(TWOFA_PAGE.enum.authenticator)}
            </PageContent>
          )}

          {page === TWOFA_PAGE.enum.backupCode && (
            <PageContent
              title={t('twoFAPage.backupCode.title')}
              description={
                <Trans i18nKey="twoFAPage.backupCode.description">
                  Please enter one of your backup codes to continue.
                  <a href={UrlConstants.DOCS_FAQ_URL} target="_blank" rel="noreferrer">
                    Learn more
                  </a>
                </Trans>
              }
              withAlert
              alert={alert}
              onDismissAlert={dismissAlert}>
              {renderCodeInput(TWOFA_PAGE.enum.backupCode)}
            </PageContent>
          )}

          {page === TWOFA_PAGE.enum.email && (
            <PageContent
              title={t('twoFAPage.email.title')}
              description={
                <Trans i18nKey="twoFAPage.email.description">
                  To continue, please enter the verification code we’ve sent to your email at
                  <strong>{{ email: userState.mfaData?.email }}</strong>.
                  <a href="https://docs.accelbyte.io/faq/faq.html" target="_blank" rel="noreferrer">
                    Learn more
                  </a>
                </Trans>
              }
              withAlert
              alert={alert}
              onDismissAlert={dismissAlert}>
              {renderCodeInput(TWOFA_PAGE.enum.email, renderHelperTextEmail())}
            </PageContent>
          )}

          {page === TWOFA_PAGE.enum.options && (
            <PageContent title={t('twoFAPage.verify.title')} description={t('twoFAPage.verify.description')}>
              {!!alert && (
                <Alert type={alert.type} onDismiss={dismissAlert} className="text-left">
                  {alert.element}
                </Alert>
              )}
              {factors.includes(TWOFA_PAGE.enum.authenticator) && (
                <MethodOption
                  icon={<AuthAppIcon />}
                  description={t('twoFAPage.verify.authApp.description')}
                  onClick={() => changePage(TWOFA_PAGE.enum.authenticator)}
                />
              )}

              {factors.includes(TWOFA_PAGE.enum.backupCode) && (
                <MethodOption
                  icon={<BackupCodeIcon />}
                  description={t('twoFAPage.verify.backupCode.description')}
                  onClick={() => changePage(TWOFA_PAGE.enum.backupCode)}
                />
              )}

              {factors.includes(TWOFA_PAGE.enum.email) && (
                <MethodOption
                  icon={<EmailIcon />}
                  description={t('twoFAPage.verify.email.description')}
                  onClick={() => requestEmailCode(false)}
                />
              )}
            </PageContent>
          )}
        </div>

        <div className="backContainer">
          <button onClick={resetMFADataAndLogout}>
            <Trans i18nKey="twoFAPage.backToLogin">Back to Login</Trans>
          </button>
        </div>
      </div>
    </div>
  )
}
