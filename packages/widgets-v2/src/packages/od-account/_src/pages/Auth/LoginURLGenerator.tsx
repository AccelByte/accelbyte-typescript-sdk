/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { Loading, LoadingSize } from '@od-components/components/Loading/Loading'
import { Ctx } from '@od-shared/Ctx'
import { GlobalPath } from '@od-shared/routes/GlobalPath'
import { LoginPath } from '@od-shared/routes/LoginPath'
import { AppState } from '@od-shared/store/AppState'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import React from 'react'
import { Trans } from 'react-i18next'
import shortid from 'shortid'
import styles from './URLGenerator.module.scss'

interface State {
  error: Error | unknown | null
}

class LoginURLGenerator extends React.Component<{}, State> {
  // random number is used to determine if LoginURLGenerator comes from a browser navigation or a URL

  randString = shortid()
  private readonly appState: AppState

  constructor(props: {}) {
    super(props)
    this.state = { error: null }
    this.randString = shortid()
    this.appState = Ctx.getAppState()
  }

  componentDidMount() {
    this.tryLogin()
  }

  // TODO duplicate with WidgUtils.getLoginUrl. Merge both methods
  tryLogin() {
    const appState = this.appState
    const { appHistory } = appState.state
    const isLogin = !!appState.getUser()
    const sdk = appState.getSdk()

    if (isLogin) {
      return appHistory.replace(GlobalPath.Home.link)
    }

    const params = UrlUtils.silentSearchParamsBuilder(appHistory.location.search)
    const returnPath = params.get(LoginPath.LoginURLGeneratorParamKeys.RETURN_PATH_PARAMS_KEY)

    appHistory.replace(`${UrlUtils.makeAbsolutePath(appHistory.location.pathname)}?${params.toString()}`)

    const { createLoginURL } = sdk.IAM.UserAuthorization()
    const loginURL = createLoginURL(returnPath)
    window.location.replace(loginURL)
  }

  render() {
    const { error } = this.state
    return (
      <div className={styles.loginURLGenerator}>
        {!error && (
          <Loading className={LoadingSize.tall}>
            <Trans i18nKey="InitialUserFetchPage.notice"></Trans>
          </Loading>
        )}
        {error && <CommonError error={error} />}
      </div>
    )
  }
}

export default LoginURLGenerator
