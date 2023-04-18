/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Ctx } from '@od-shared/Ctx'
import React from 'react'
import AuthorizationCodeExchanger from '@od-account/pages/Auth/AuthorizationCodeExchanger'

export const AuthCodeInterceptorsWidget = ({ children }: { children: JSX.Element }) => {
  const appState = Ctx.getAppState()

  if (!appState.state.authCodeExchangeTried) {
    return <AuthorizationCodeExchanger appState={appState} />
  }

  return children
}
