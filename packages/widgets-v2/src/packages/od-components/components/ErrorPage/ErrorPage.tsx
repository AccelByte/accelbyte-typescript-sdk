/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AppName } from '@od-shared/constants/ShConstants'
// import { ConfigError } from '@od-shared/models/ConfigError'
// import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
// import { LauncherHelper } from '@od-shared/utils/LauncherHelper'
import React from 'react'
// import { ConfigErrorSection } from './ConfigErrorSection'
// import { LoginSessionExpired } from './LoginSessionExpired'
// import { NetworkError } from './NetworkError'
// import { ServerError } from './ServerError'
// import { UnknownError } from './UnknownError'

interface Props {
  error: Error
  message?: string
  appName?: AppName
}

export class ErrorPage extends React.Component<Props> {
  openLoginWeb = () => {
    // const sdk = Ctx.getAppState().getSdk()
    // const appHistory = Ctx.getAppState().state.appHistory
    // const loginURL = sdk.IAM.UserAuthorization().createLoginURL()
    // LauncherHelper.openExternalBrowser(loginURL)
    // Ctx.getAppState().clearError()
    // appHistory.replace(LoginPath.Login.link)
  }

  render(): React.ReactNode {
    // const { error, message } = this.props
    if (this.props.children) return this.props.children
    return <div />

    // if (error instanceof ConfigError) {
    //   return <ConfigErrorSection error={error} />
    // }
    // if (ErrorHelper.isAxiosNetworkError(error)) {
    //   return <NetworkError error={error} message={message} buttonAction={LauncherHelper.refreshBrowser} />
    // }
    // if (ErrorHelper.isAxiosServerError(error)) {
    //   return <ServerError error={error} message={message} buttonAction={LauncherHelper.refreshBrowser} />
    // }
    // if (ErrorHelper.isLoginSessionExpired(error)) {
    //   return <LoginSessionExpired error={error} message={message} buttonAction={this.openLoginWeb} />
    // }
    // return <UnknownError error={error} message={message} buttonAction={LauncherHelper.refreshBrowser} />
  }
}
