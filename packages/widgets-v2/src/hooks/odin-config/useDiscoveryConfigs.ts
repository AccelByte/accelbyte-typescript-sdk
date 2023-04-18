/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AppName } from '@od-shared/constants/ShConstants'
import { FeatureFlagsType } from '@od-shared/FeatureFlags'
import { AppBuilderUtils } from '@od-shared/utils/AppBuilderUtils'
import { useCallback } from 'react'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { useSdk } from '../useSdk'
import { createStore, useStore } from '../useStore'
import { DesktopChecker } from '@accelbyte/sdk'
import { DiscoveryConfigData, TemplateConfig } from '@accelbyte/sdk-odinconfig'

interface DiscoveryConfigState {
  discoveryConfigData: DiscoveryConfigData | null
  flags: FeatureFlagsType | null
  discoveryConfigError: FetchErrorType | null
  fetchDiscoveryConfigStatus: FetchStatus
  allSocialLinks: DiscoveryConfigData['socialLinks']['data']['value'] | null
  isSingleGame: boolean
}

const DEFAULT_STATE: DiscoveryConfigState = {
  discoveryConfigData: null,
  flags: null,
  discoveryConfigError: null,
  fetchDiscoveryConfigStatus: FetchStatus.IDLE,
  allSocialLinks: null,
  isSingleGame: true
}

const store = createStore(DEFAULT_STATE)

export function useDiscoveryConfigs() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(store)
  const appName = DesktopChecker.isDesktopApp() ? AppName.LAUNCHER : AppName.PP

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const fetchDiscoveryConfigs = useCallback(
    async (
      widgetOptionDiscoveryConfig?: DiscoveryConfigData
    ): Promise<HookDataReturns<Pick<DiscoveryConfigState, 'flags' | 'discoveryConfigData'>>> => {
      let discoveryConfigData: DiscoveryConfigData | null = null
      let discoveryConfigError: FetchErrorType | null = null
      let newFeatureFlags: FeatureFlagsType | null = null
      let allSocialLinks: DiscoveryConfigState['allSocialLinks'] | null = null
      let isSingleGame = true

      try {
        setState({ discoveryConfigError: null, fetchDiscoveryConfigStatus: FetchStatus.FETCHING })

        const discovery = await AppBuilderUtils.fetchDiscovery({
          sdk,
          appName,
          widgetOptions: widgetOptionDiscoveryConfig
        })
        newFeatureFlags = getFeatureFlags(discovery, appName)
        discoveryConfigData = discovery
        allSocialLinks = discovery.socialLinks.data.value.filter(socialLink => socialLink.apps.includes(appName))
        isSingleGame = discovery.templateConfig.data.value === TemplateConfig.SINGLE
        return {
          data: {
            discoveryConfigData,
            flags: newFeatureFlags
          }
        }
      } catch (error) {
        discoveryConfigError = WidgetErrorHelper.getErrorType(error)
        return { error: discoveryConfigError }
      } finally {
        setState({
          discoveryConfigData,
          discoveryConfigError,
          flags: newFeatureFlags,
          allSocialLinks,
          fetchDiscoveryConfigStatus: FetchStatus.IDLE,
          isSingleGame
        })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      resetState,
      fetchDiscoveryConfigs
    }
  }
}

// Helper functions.
function getFeatureFlags(discoveryConfig: DiscoveryConfigData, appName: AppName): FeatureFlagsType | null {
  let featureFlags: FeatureFlagsType | null = null

  switch (appName) {
    case AppName.PP:
      featureFlags = { ...discoveryConfig.ppFeatureFlags.data, ...discoveryConfig.experimentalFeatureFlags.data } as FeatureFlagsType
      break
    case AppName.LAUNCHER:
      featureFlags = {
        ...discoveryConfig.launcherFeatureFlags.data,
        ...discoveryConfig.experimentalFeatureFlags.data
      } as FeatureFlagsType
      break
    default:
      return null
  }

  return featureFlags
}
