/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useState } from 'react'
import { IamUserAuthorizationClient, LoginErrorCancelled, LoginErrorExpired } from '@accelbyte/sdk-iam'
import { useAppState } from '~/hooks/useAppState'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'

import { AuthorizationCodeExchanger } from '@od-account/pages/Auth/AuthorizationCodeExchanger'

export const AuthCodeExchangeWidget = ({ children }) => {
  const [authCodeExchangeTried, setAuthCodeExchangeTried] = useState(false)
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()
  const appState = useAppState()

  const searchParams = new URLSearchParams(historyState.location?.search)
  const errorParams = searchParams.get('error')

  const errorRedirection = (error: Error | unknown) => {
    if (error instanceof LoginErrorExpired) {
      appState.logout()
      return historyState.replace(routesState['error.sessionExpired'].link)
    }
    if (error instanceof LoginErrorCancelled) {
      return historyState.replace(`${historyState.location?.pathname}`)
    }
    return historyState.replace(`${historyState.location?.pathname}`)
  }

  if (errorParams) {
    const error = IamUserAuthorizationClient.deduceLoginError(errorParams)
    errorRedirection(error)
    return null
  }

  if (!authCodeExchangeTried) {
    return <AuthorizationCodeExchanger onAuthCodeDone={() => setAuthCodeExchangeTried(true)} onAuthCodeError={errorRedirection} />
  }

  return children
}
