/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccelbyteSDK, SDKOptions } from '@accelbyte/sdk'
import { SessionExpiredDialog } from '@od-account/pages/Auth/SessionExpiredDialog'
import { Alerts } from '@od-components/components/Alert/Alerts'
import { LoadingPage } from '@od-components/components/LoadingPage'
import { AppName } from '@od-shared/constants/ShConstants'
import { Ctx } from '@od-shared/Ctx'
import { AppState } from '@od-shared/store/AppState'
import '@od-shared/styles/'
import { Buffer } from 'buffer'
import React, { ReactNode } from 'react'
import { Router, Switch } from 'react-router-dom'
import { Provider, Subscribe } from 'unstated'
import {
  ConfigsUtils,
  SimplifiedDiscoveryConfigData,
  SimplifiedPlayerPortalConfigData,
  SimplifiedTwitchDropConfigData
} from './utils/ConfigsUtils'

window.Buffer = Buffer

interface SdkWidgetProps {
  sdkOptions: SDKOptions
  onInitializeSDK?: (sdk: AccelbyteSDK) => void
  basePath?: string
  widgetOptions?: {
    generalConfigs: SimplifiedDiscoveryConfigData
    playerPortalConfigs?: SimplifiedPlayerPortalConfigData
    twitchDropConfigs?: SimplifiedTwitchDropConfigData
  }
  children?: ReactNode
}

interface State {
  initialized: boolean
}

export class SdkWidget extends React.Component<SdkWidgetProps, State> {
  constructor(props: SdkWidgetProps) {
    super(props)
    this.state = {
      initialized: false
    }
  }

  async componentDidMount() {
    try {
      const { widgetOptions } = this.props
      if (this.props.onInitializeSDK) {
        this.props.onInitializeSDK(Ctx.getAppState().getSdk())
      }

      await Promise.all([
        Ctx.fetchConfigs(AppName.WIDGET, {
          configs: ConfigsUtils.createPlayerPortalConfigs(widgetOptions?.playerPortalConfigs),
          discovery: ConfigsUtils.createDiscoveryConfigs(widgetOptions?.generalConfigs),
          twitchDropConfigs: ConfigsUtils.createTwitchDropConfigs(widgetOptions?.twitchDropConfigs)
        }),
        Ctx.registerUserFetch()
      ])
      const appId = Ctx.getAppState().getGameId()
      const isSingleGame = Ctx.getAppState().isSingleGame()
      if (isSingleGame && appId) {
        Ctx.getGameState().setActiveGame(appId)
        await Ctx.getGameState().fetchGamesInfo([appId])
      }
    } catch (e) {
      console.error(e)
    } finally {
      this.setState({ initialized: true })
    }
  }

  render() {
    const { children, sdkOptions, basePath } = this.props
    const { initialized } = this.state
    const appState = Ctx.getAppState(sdkOptions, basePath)
    const isLoading = !initialized

    return (
      <Provider inject={[appState]}>
        <Router history={appState.state.appHistory}>
          <Subscribe to={[AppState]}>
            {() => {
              return (
                <div id="sdk-widget-app">
                  <SessionExpiredDialog />
                  <Alerts />

                  <React.Suspense fallback={<LoadingPage />}>
                    <Switch>
                      {isLoading && <LoadingPage />}

                      {children}
                    </Switch>
                  </React.Suspense>
                </div>
              )
            }}
          </Subscribe>
        </Router>
      </Provider>
    )
  }
}
