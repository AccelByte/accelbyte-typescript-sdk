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
import { DesktopChecker } from '@accelbyte/sdk'
import React, { Component } from 'react'
import shortid from 'shortid'
import styles from './URLGenerator.module.scss'

interface State {
  error: Error | unknown | null
}

class RegisterUrlGenerator extends Component<{}, State> {
  randString = shortid()
  private readonly appState: AppState

  constructor(props: {}) {
    super(props)
    this.state = { error: null }
    this.randString = shortid()
    this.appState = Ctx.getAppState()
  }

  componentDidMount() {
    this.tryRegister()
  }

  async tryRegister() {
    try {
      if (DesktopChecker.isDesktopApp()) {
        const appState = this.appState

        // TODO @atanas drop "!== null" and use if (appState.getUser())
        if (appState.getUser() !== null) return appState.state.appHistory.replace(GlobalPath.Home.link)

        const params = UrlUtils.silentSearchParamsBuilder(appState.state.appHistory.location.search)
        const returnPath = params.get(LoginPath.LoginURLGeneratorParamKeys.RETURN_PATH_PARAMS_KEY)
        const randStringInParams = params.get(LoginPath.LoginURLGeneratorParamKeys.RANDOM_NUMBER_KEY)

        if (randStringInParams && randStringInParams !== this.randString) {
          params.delete(LoginPath.LoginURLGeneratorParamKeys.RANDOM_NUMBER_KEY)
          appState.state.appHistory.replace(`${returnPath || GlobalPath.Home.link}`)
          return
        }

        params.set(LoginPath.LoginURLGeneratorParamKeys.RANDOM_NUMBER_KEY, this.randString)
        appState.state.appHistory.replace(`${UrlUtils.makeAbsolutePath(appState.state.appHistory.location.pathname)}?${params.toString()}`)

        const registerURL = Ctx.getAppState().getSdk().IAM.UserAuthorization().createLoginURL(null, 'register')
        window.location.replace(registerURL)
      }
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    const { error } = this.state
    return (
      <div className={styles.registerURLGenerator}>
        {!error && <Loading className={LoadingSize.tall} />}
        {error && <CommonError error={error} />}
      </div>
    )
  }
}

export default RegisterUrlGenerator
