/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Loading } from '@od-components/components/Loading/Loading'
import { Ctx } from '@od-shared/Ctx'
import { GlobalPath } from '@od-shared/routes/GlobalPath'
import { AppState } from '@od-shared/store/AppState'
import React from 'react'
import { Trans } from 'react-i18next'

class LogoutPage extends React.Component<{}> {
  private readonly appState: AppState
  constructor(props: {}) {
    super(props)
    this.appState = Ctx.getAppState()
  }

  async componentDidMount() {
    if (this.appState.getUser()) {
      await this.appState.logout()
    } else {
      this.appState.state.appHistory.replace(GlobalPath.Home.link)
    }
  }

  render() {
    return (
      <div className="mainPageContainer">
        <Loading>
          <strong>
            <Trans i18nKey="LogoutPage.loading">Logging you out...</Trans>
          </strong>
        </Loading>
      </div>
    )
  }
}

export default LogoutPage
