/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { IamHelper, IamUserAuthorizationClient } from '@accelbyte/sdk-iam'
import { CommonError } from '@od-components/components/CommonError'
import { Loading, LoadingSize } from '@od-components/components/Loading/Loading'
import { t } from '@od-components/i18n/index'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { AxiosError } from 'axios'
import React, { useState, useEffect } from 'react'
import { Trans } from 'react-i18next'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useAppState } from '~/hooks/useAppState'
import { useSdk } from '~/hooks/useSdk'
import styles from './AuthorizationCodeExchanger.module.scss'

export const AuthorizationCodeExchanger = (props: { onAuthCodeDone: () => void; onAuthCodeError: (error: Error | unknown) => void }) => {
  const [error, setError] = useState<AxiosError | Error | unknown | null>(null)
  const [sdk] = useSdk()
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()
  const { mutations: userMutations } = useUserInfo()
  const appState = useAppState()

  useEffect(() => {
    exchange()
  }, [])

  const clearParams = () => {
    historyState.replace(`${historyState.location?.pathname}`)
  }

  const exchange = async () => {
    try {
      await exchangeAuthorizationCode()
      props.onAuthCodeDone()
    } catch (error) {
      console.error(error)
      clearParams()
      setError(error)
    }
  }

  const exchangeAuthorizationCode = async () => {
    if (!historyState.location?.search) return
    const { code, error, state } = IamHelper.getAuthorizationCodeParams(historyState.location?.search)

    try {
      const userAuthorization = new IamUserAuthorizationClient(sdk)
      const exchangeResult = await userAuthorization.exchangeAuthorizationCode({
        code,
        error,
        state
      })

      if (!exchangeResult) {
        return
      }
      clearParams()

      const { mfaData, returnPath } = exchangeResult
      if (mfaData) {
        userMutations.updateMFAData(mfaData)
      } else {
        await appState.fetchAllUserInformation()
      }

      if (returnPath) {
        historyState.replace(returnPath)
      } else {
        returnPath.replace(routesState.home.link)
      }
    } catch (error) {
      props.onAuthCodeError(error)
    }
  }

  return (
    <React.Fragment>
      {!error && (
        <Loading className={LoadingSize.medium}>
          <Trans i18nKey="InitialUserFetchPage.notice"></Trans>
        </Loading>
      )}
      {error && (
        <div className={styles.errorContainer}>
          <CommonError error={error} />
        </div>
      )}
      {error && <AuthorizationCodeExchangerError error={error} />}
    </React.Fragment>
  )
}

interface ErrorProps {
  error?: Error | unknown
}

const AuthorizationCodeExchangerError = ({ error }: ErrorProps) => {
  const { state: historyState } = useHistory()
  const [sdk] = useSdk()

  const tryLogin = () => {
    const loginURL = new IamUserAuthorizationClient(sdk).createLoginURL(historyState.location.pathname)
    window.location.replace(loginURL)
  }

  if (!error) return null

  if (ErrorHelper.isAxiosError(error) && error?.response?.status) {
    const { status } = error.response

    if (status === 401) {
      return (
        <div className={styles.sessionExpiredContainer}>
          <Trans i18nKey="AuthorizationCodeExchanger.error.sessionExpired">Session Expired</Trans>
          <div onClick={tryLogin}>{t('HomePage.login')}</div>
        </div>
      )
    }
  }

  return <CommonError error={error} />
}
