/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { useMemo } from 'react'
import { useDiscoveryConfigs } from './useDiscoveryConfigs'
import { AppName } from '@od-shared/constants/ShConstants'
import { useAppConfigs } from './useAppConfigs'

export function useCompanyLogo(appName: AppName.LAUNCHER | AppName.PP | AppName.TWITCHDROP, position: 'header' | 'footer') {
  const {
    state: { discoveryConfigData }
  } = useDiscoveryConfigs()
  const {
    state: { playerPortalConfigData, launcherData, twitchDropData }
  } = useAppConfigs()

  const companyLogo = useMemo(() => {
    let logoVariantIndex: number | null = null

    switch (appName) {
      case AppName.LAUNCHER: {
        const launcherLogoVariantData = launcherData?.logoVariant.data
        logoVariantIndex = launcherLogoVariantData ? launcherLogoVariantData[position] : null
        break
      }
      case AppName.PP: {
        const ppLogoVariantData = playerPortalConfigData?.logoVariant.data
        logoVariantIndex = ppLogoVariantData ? ppLogoVariantData[position] : null
        break
      }
      case AppName.TWITCHDROP: {
        const twitchDropLogoVariantData = twitchDropData?.logoVariant.data
        logoVariantIndex = twitchDropLogoVariantData ? twitchDropLogoVariantData[position] : null
        break
      }
    }

    const index: number = logoVariantIndex ?? discoveryConfigData?.companyLogo.data.defaultIndex ?? 0
    return discoveryConfigData?.companyLogo.data.images[index]?.url || ''
  }, [discoveryConfigData, playerPortalConfigData, launcherData, twitchDropData])

  return {
    companyLogo
  }
}
