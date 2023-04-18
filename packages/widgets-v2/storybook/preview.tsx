/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import '@od-shared/styles'
import '~/styles/normalize.scss'
import { AppBuilderUtils } from '@od-shared/utils/AppBuilderUtils'
import React, { useEffect, useState } from 'react'
import { resetStores } from '~/hooks/useStore'

import { initialize, mswLoader } from 'msw-storybook-addon'
import { SdkWidget } from '~/SdkWidget'
import { Env } from '@od-shared/Env'
import { StorybookMockLink, STORYBOOK_MOCK_HISTORY } from '~/mocks/widget'

import discoverySeedConfigs from 'seed/seed-latest--template-discovery.json'
import ppSeedConfigs from 'seed/seed-latest--pp.json'
import { DiscoveryConfigData, PlayerPortalConfigData, TemplateConfig } from '@accelbyte/sdk-odinconfig'
import { SimplifiedDiscoveryConfigData } from '~/utils/ConfigsUtils'
import { RouteUtils } from '~/utils/RouteUtils'

// Initialize MSW.
initialize({ waitUntilReady: true })

// Reference: https://github.com/mswjs/msw-storybook-addon/releases/tag/v1.7.0.
export const loaders = [mswLoader]

const ppConfigs = ppSeedConfigs as PlayerPortalConfigData
const discoveryConfigs = discoverySeedConfigs as DiscoveryConfigData

discoveryConfigs.experimentalFeatureFlags.data.isPaymentV2Enabled = true
discoveryConfigs.appId.data.value = 'lightfantastic'

// Style the HTML according to the config data.
const style = document.createElement('style')
style.innerHTML = AppBuilderUtils.convertConfigToCss(discoveryConfigs.globalPageConfig)

export const decorators = [
  (Story, context) => {
    function Component() {
      const [shouldRender, setShouldRender] = useState(false)
      const [locationSearch, setLocationSearch] = useState('')

      useEffect(() => {
        setShouldRender(true)
        localStorageReset()

        return () => {
          // Since technically our stores are mutable, we need to reset it every time
          // we change story.
          setShouldRender(false)
          resetStores()
        }
      }, [])

      useEffect(() => {
        const contextQueryParams = context.parameters.query
        if (contextQueryParams) {
          const queryParamKeys = Object.keys(contextQueryParams)

          let search = ''
          for (const key of queryParamKeys) {
            const queryParamValue =
              typeof contextQueryParams[key] === 'string' ? contextQueryParams[key] : JSON.stringify(contextQueryParams[key])
            const encodeURIvalue = encodeURIComponent(queryParamValue)

            if (search) {
              search += '&'
            }
            search += `${key}=${encodeURIvalue}`
          }

          setLocationSearch(`?${search}`)
        }
      }, [context.parameters.query])

      useEffect(() => {
        const contextLocalStorage = context.parameters.localStorage
        if (contextLocalStorage) {
          const localStorageKeys = Object.keys(contextLocalStorage)
          for (const key of localStorageKeys) {
            const localStorageValue = contextLocalStorage[key]
            window.localStorage.setItem(key, localStorageValue)
          }
        }
      }, [context.parameters.localStorage])

      const localStorageReset = () => {
        window.localStorage.clear()
      }

      // This prevents double fetch between story changes, so Storybook can be our source of truth for the actual app.
      return shouldRender ? (
        <SdkWidget
          routes={RouteUtils.createWidgetRoutes({})}
          sdkOptions={{
            baseURL: Env.NODE_ENV === 'production' ? Env.BASE_URL : '/api',
            clientId: Env.CLIENT_ID,
            namespace: Env.NAMESPACE,
            redirectURI: Env.REDIRECT_URL
          }}
          widgetOptions={{
            playerPortalConfigs: {
              footer: ppConfigs.footer.data,
              launcherDownloadLink: ppConfigs.launcherDownloadLink.data,
              logoVariant: ppConfigs.logoVariant.data
            },
            generalConfigs: {
              appId: discoveryConfigs.appId.data,
              avatarsList: {
                value: discoveryConfigs.avatarsList.data.value.split('\n')
              },
              brandName: discoveryConfigs.brandName.data,
              pageTitle: discoveryConfigs.pageTitle.data,
              companyLogo: discoveryConfigs.companyLogo.data,
              copyright: discoveryConfigs.copyright.data,
              experimentalFeatureFlags: discoveryConfigs.experimentalFeatureFlags.data,
              globalPageConfig: discoveryConfigs.globalPageConfig.data,
              ppFeatureFlags: discoveryConfigs.ppFeatureFlags.data,
              socialLinks: discoveryConfigs.socialLinks.data,
              templateConfig: {
                value: context.globals.templateConfig as SimplifiedDiscoveryConfigData['templateConfig']['value']
              }
            }
          }}
          history={{
            ...STORYBOOK_MOCK_HISTORY,
            location: {
              ...STORYBOOK_MOCK_HISTORY.location,
              search: locationSearch
            }
          }}
          Link={StorybookMockLink}
          NavLink={StorybookMockLink}>
          <Story />
        </SdkWidget>
      ) : null
    }

    return <Component />
  }
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const globalTypes = {
  templateConfig: {
    name: 'Template Config',
    description: 'Global Template Config',
    defaultValue: TemplateConfig.SINGLE,
    toolbar: {
      icon: 'lightning',
      items: [TemplateConfig.SINGLE, TemplateConfig.MULTIPLE],
      showName: true
    }
  }
}
