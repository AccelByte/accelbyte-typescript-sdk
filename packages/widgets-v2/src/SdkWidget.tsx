/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccelbyteSDK, SDKOptions, Accelbyte, DesktopChecker, UrlHelper } from '@accelbyte/sdk'
import { LoadingPage } from '@od-components/components/LoadingPage'
import '@od-shared/styles/'
import { SSRHelper } from '@od-shared/utils/SSRHelper'
import { Buffer } from 'buffer'
import React, { ReactNode, useEffect, useState, useRef } from 'react'
import { I18nextProvider } from 'react-i18next'
import { i18nInstance } from '@od-components/i18n/index'
import { useSdk, useSdkOptions } from './hooks/useSdk'
import {
  ConfigsUtils,
  SimplifiedDiscoveryConfigData,
  SimplifiedPlayerPortalConfigData,
  wait,
  SimplifiedTwitchDropConfigData
} from './utils/ConfigsUtils'
import { WidgetCtx } from './context/widget-ctx'
import { useUserInfo } from './hooks/iam/useUserInfo'
import { useLegal } from './hooks/legal/useLegal'
import { useDiscoveryConfigs } from './hooks/odin-config/useDiscoveryConfigs'
import { AppName } from '@od-shared/constants/ShConstants'
import { ConfigError, ConfigErrorCode } from '@od-shared/models/ConfigError'
import { useAppConfigs } from './hooks/odin-config/useAppConfigs'
import { useHistory, WidgetHistory } from './hooks/routes/useHistory'
import { useRoutes } from './hooks/routes/useRoutes'
import { DefaultWidgetLink } from '@od-components/components/WidgetLink/DefaultWidgetLink'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { FetchErrorType } from './constants/fetch-statuses'
import { useAppState } from './hooks/useAppState'
import { AllWidgetRoutesWithPathMaker } from './utils/RouteUtils'
import { DiscoveryConfigData, LauncherConfigData, PlayerPortalConfigData, TwitchDropConfigData } from '@accelbyte/sdk-odinconfig'
import { LegalHelper } from '@accelbyte/sdk-legal'

if (!SSRHelper.isSSR()) {
  window.Buffer = Buffer
}

interface SdkWidgetProps {
  sdkOptions: SDKOptions
  onInitializeSDK?: (sdk: AccelbyteSDK) => void
  widgetOptions?: {
    generalConfigs: SimplifiedDiscoveryConfigData | DiscoveryConfigData
    playerPortalConfigs?: SimplifiedPlayerPortalConfigData | PlayerPortalConfigData
    twitchDropConfigs?: SimplifiedTwitchDropConfigData | TwitchDropConfigData
  }
  children?: ReactNode
  Link: typeof DefaultWidgetLink
  NavLink: typeof DefaultWidgetLink
  routes: AllWidgetRoutesWithPathMaker
  history: WidgetHistory
}

const App = ({ sdkOptions, widgetOptions, onInitializeSDK, children, history, routes }: SdkWidgetProps) => {
  const [sdk, setSdk] = useSdk()
  const [_, setSdkOptions] = useSdkOptions()

  const [isUserInitialized, setIsUserInitialized] = useState(false)
  const [isConfigInitialized, setIsConfigInitialized] = useState(false)
  const [_isSessionExpired, setIsSessionExpired] = useState(false)
  const [_sdkError, setSdkError] = useState<FetchErrorType | Error | null>(null)

  const { state: userState, mutations: userMutations } = useUserInfo()
  const { state: legalState } = useLegal()
  const { state: discoveryConfigsState, mutations: discoveryConfigsMutations } = useDiscoveryConfigs()
  const { mutations: appConfigsMutations } = useAppConfigs()
  const { mutations: historyMutations } = useHistory()
  const { mutations: routesMutations } = useRoutes()
  const { clearSession, refreshSession, fetchAllUserInformation, refreshToken } = useAppState()

  const isLoading = !isUserInitialized || !isConfigInitialized

  useEffect(() => {
    // Skip if SDK is already initialized.
    if (sdk) return

    const sdkInstance = Accelbyte.SDK({
      options: sdkOptions,
      onEvents: {
        onError,
        onSessionExpired,
        onGetUserSession,
        onUserEligibilityChange
      }
    })
    setSdk(sdkInstance)
    setSdkOptions({
      ...sdkOptions,
      redirectURI: UrlHelper.trimSlashFromStringEnd(sdkOptions.redirectURI)
    })

    if (onInitializeSDK) {
      onInitializeSDK(sdkInstance)
    }
  }, [sdk, sdkOptions, onInitializeSDK])

  useEffect(() => {
    historyMutations.initHistory(history)
    if (routes) {
      routesMutations.initRoutes(routes)
    }
  }, [])

  useEffect(() => {
    historyMutations.setLocation(history.location)
  }, [JSON.stringify(history.location)])

  const previousWidgetOptions = useRef<typeof widgetOptions>(undefined)
  useEffect(() => {
    const init = async () => {
      // Skip if widget options is the same.
      // This is to prevent multiple instantiaton of the widget, since `widgetOptions` generally are passed
      // as an object which reference is re-created each render.
      if (previousWidgetOptions.current === widgetOptions) return

      const simplifiedDiscoveryConfigsParsed = SimplifiedDiscoveryConfigData.safeParse(widgetOptions?.generalConfigs)
      const discoveryConfigs = simplifiedDiscoveryConfigsParsed.success
        ? ConfigsUtils.createDiscoveryConfigs(simplifiedDiscoveryConfigsParsed.data)
        : (widgetOptions?.generalConfigs as DiscoveryConfigData)

      const simplifiedPlayerPortalConfigsParsed = SimplifiedPlayerPortalConfigData.safeParse(widgetOptions?.playerPortalConfigs)
      const playerPortalConfigs = simplifiedPlayerPortalConfigsParsed.success
        ? ConfigsUtils.createPlayerPortalConfigs(simplifiedPlayerPortalConfigsParsed.data)
        : (widgetOptions?.playerPortalConfigs as PlayerPortalConfigData)

      const SimplifiedTwitchDropConfigsParsed = SimplifiedTwitchDropConfigData.safeParse(widgetOptions?.twitchDropConfigs)
      const twitchDropConfigs = SimplifiedTwitchDropConfigsParsed.success
        ? ConfigsUtils.createTwitchDropConfigs(SimplifiedTwitchDropConfigsParsed.data)
        : (widgetOptions?.twitchDropConfigs as TwitchDropConfigData)

      try {
        userMutations.setDefaultMfaData()
        await initialConfigFetcher(discoveryConfigs, playerPortalConfigs, twitchDropConfigs)
      } catch (e) {
        console.error(e)
      } finally {
        setIsConfigInitialized(true)
        previousWidgetOptions.current = widgetOptions
      }
    }

    init()
  }, [widgetOptions])

  useEffect(() => {
    // Skip if the flags doesn't exist.
    if (!discoveryConfigsState.flags) return

    const userInit = async () => {
      try {
        const searchParams = new URLSearchParams(window.location.search)
        const code = searchParams.get('code')

        // Skip if there is code in search params
        if (code) return

        await fetchAllUserInformation()
      } finally {
        setIsUserInitialized(true)
      }
    }

    userInit()
  }, [discoveryConfigsState.flags?.isLegalEnabled])

  const initialConfigFetcher = async (
    defaultDiscovery?: DiscoveryConfigData,
    defaultConfigs?: PlayerPortalConfigData | LauncherConfigData,
    defaultTwitchDropConfigs?: TwitchDropConfigData
  ) => {
    let isConfigValid = false
    let retryNumber = 0
    let featureFlags: Record<string, any> | null = null
    let config: PlayerPortalConfigData | LauncherConfigData | null = defaultConfigs || null
    let discoveryConfig: DiscoveryConfigData | null = defaultDiscovery || null
    const appName = DesktopChecker.isDesktopApp() ? AppName.LAUNCHER : AppName.WIDGET

    while (!isConfigValid && retryNumber < 3) {
      const result = await discoveryConfigsMutations.fetchDiscoveryConfigs(defaultDiscovery)
      discoveryConfig = result.data?.discoveryConfigData || null
      featureFlags = result.data?.flags || null

      if (discoveryConfig) {
        if (appName === AppName.WIDGET) {
          const result = await appConfigsMutations.fetchPlayerPortalConfigs(
            discoveryConfig,
            defaultConfigs as PlayerPortalConfigData | undefined
          )
          config = result.data || null
        }
        if (appName === AppName.LAUNCHER) {
          const result = await appConfigsMutations.fetchLauncherConfigs(discoveryConfig, defaultConfigs as LauncherConfigData | undefined)
          config = result.data || null
        }

        await appConfigsMutations.fetchTwitchDropConfigs(discoveryConfig, defaultTwitchDropConfigs)
      }

      isConfigValid = !!featureFlags && !!config && Object.keys(config).length > 0
      retryNumber += 1

      if (!isConfigValid && retryNumber < 3) {
        // Wait 5 and 10 seconds before the subsequent request.
        await wait(retryNumber * 5000)
      }
    }

    if (!featureFlags || !config || Object.keys(config).length === 0) {
      throw new ConfigError(
        'Configuration errors were detected, application will not start. Please fix the configuration then try again.',
        appName,
        ConfigErrorCode.INVALID_CONFIGS
      )
    }

    if (discoveryConfig && config) {
      ConfigsUtils.injectCss(discoveryConfig, config.pageConfig)
    }
  }

  const onError = async (error: Error) => {
    if (ErrorHelper.isAxiosNetworkError(error) || ErrorHelper.isLoginSessionExpired(error)) {
      const { userError } = userState
      if (ErrorHelper.isAxiosServerError(userError)) {
        setSdkError(userError)
        return
      }

      setSdkError(error)
    }

    // Refresh user token if got error 403 but not blocked by legal
    const { eligibilities } = legalState
    const isBlockedByLegal = LegalHelper.currentUserIsBlockedByLegal(eligibilities)
    if (ErrorHelper.isAxiosError(error) && error.response?.status === 403 && !isBlockedByLegal) {
      const tokenResponse = await refreshToken()
      if (tokenResponse) {
        refreshSession(tokenResponse.access_token, tokenResponse.refresh_token)
        await fetchAllUserInformation()
      }
    }
  }

  const onSessionExpired = () => {
    clearSession(setSessionExpired)
  }

  const setSessionExpired = () => {
    setIsSessionExpired(true)
  }

  const onGetUserSession = (accessToken?: string, refreshToken?: string) => {
    refreshSession(accessToken, refreshToken)
  }

  const onUserEligibilityChange = () => {
    fetchAllUserInformation()
  }

  return (
    <div id="app" className="sdk-widget-app font-body">
      {/* <SessionExpiredDialog isSessionExpired={isSessionExpired} onLogout={appState.logout} /> */}

      {isLoading && <LoadingPage />}
      {!isLoading && children}
    </div>
  )
}

export const SdkWidget = (props: SdkWidgetProps) => {
  return (
    <I18nextProvider i18n={i18nInstance}>
      <WidgetCtx.Provider
        value={{
          Link: props.Link,
          NavLink: props.NavLink
        }}>
        <App {...props} />
      </WidgetCtx.Provider>
    </I18nextProvider>
  )
}
