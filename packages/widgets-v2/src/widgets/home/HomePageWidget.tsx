/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { useEffect } from 'react'
import { HomePage } from '@od-player-portal/pages/Home/HomePage'
import { useAppConfigs } from '~/hooks/odin-config/useAppConfigs'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import { useHistory } from '~/hooks/routes/useHistory'
import { useSdkOptions } from '~/hooks/useSdk'

interface HomePageWidgetProps {
  /**
   * Allows for cleaning the homepage redirection when the homepage is disabled and there is a base path included in the redirection URL.
   */
  basePath?: string
}
export function HomePageWidget({ basePath }: HomePageWidgetProps) {
  const {
    state: { playerPortalConfigData }
  } = useAppConfigs()
  const { state: history } = useHistory()
  const [sdkOptions] = useSdkOptions()
  const homepageConfig = playerPortalConfigData?.homepage.data

  useEffect(() => {
    if (homepageConfig?.isDisabled && homepageConfig.redirectionURL) {
      const routerHomepageRedirection = UrlUtils.getRouterRedirection(homepageConfig?.redirectionURL, sdkOptions.baseURL)
      if (routerHomepageRedirection && routerHomepageRedirection !== '/') {
        const redirectionWithoutBasePath = basePath ? routerHomepageRedirection.replace(basePath, '') : routerHomepageRedirection
        history.replace(redirectionWithoutBasePath)
      } else {
        window.location.href = homepageConfig.redirectionURL
      }
    }
  }, [homepageConfig?.isDisabled, homepageConfig?.redirectionURL])

  if (homepageConfig?.isDisabled && homepageConfig.redirectionURL) {
    return null
  }

  return <HomePage />
}
