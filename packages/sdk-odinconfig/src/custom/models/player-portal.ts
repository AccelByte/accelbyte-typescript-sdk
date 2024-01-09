/*
 * Copyright (c) 2023-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Config } from '../../generated-public/odin-config/definitions/Config.js'
import { LogoVariantConfig, PageConfig } from './base-configs.js'

export enum PlayerPortalHomePageKeys {
  IS_DISABLED = 'isDisabled',
  REDIRECTION_URL = 'redirectionURL',
  SITE_BRAND_URL = 'siteBrandURL',
  INTRO = 'intro',
  BACKGROUND = 'background',
  CTA_BUTTON = 'CTAButton'
}

export const configSize = z.enum(['default', 's', 'l', 'xl'])
export const configAlign = z.enum(['mid', 'top', 'top-left', 'top-right', 'left', 'right', 'bottom', 'bottom-left', 'bottom-right'])
export const pricingType = z.enum(['free', 'paid'])
const configBgOverlayType = z.enum(['gradient', 'full'])
const configCTAActionType = z.enum(['purchase-game', 'download-launcher', 'custom'])
const configCTAPurchaseType = z.enum(['purchase-window', 'detailed-page'])

export const PlatformItem = z.object({
  title: z.string(),
  url: z.string(),
  image: z.string(),
  isCustom: z.boolean()
})

export interface PlatformItem extends z.infer<typeof PlatformItem> {}

export const PlatformItemList = z.array(PlatformItem)

export interface PlatformItemList extends z.infer<typeof PlatformItemList> {}

export const IntroConfig = z.object({
  align: configAlign,
  isActive: z.boolean(),
  title: z.string(),
  titleSize: configSize,
  message: z.string(),
  messageSize: configSize,
  logoImageUrl: z.string(),
  logoImageSize: configSize,
  isShowPlatforms: z.boolean(),
  platforms: PlatformItemList
})

export interface IntroConfig extends z.infer<typeof IntroConfig> {}

export const HomepageBackgroundConfig = z.object({
  isOverlay: z.boolean(),
  opacity: z.string(),
  type: configBgOverlayType,
  url: z.string(),
  videoUrl: z.string()
})

export interface HomepageBackgroundConfig extends z.infer<typeof HomepageBackgroundConfig> {}

export const CTAButtonConfig = z.object({
  actionType: configCTAActionType,
  customUrl: z.string(),
  isActive: z.boolean(),
  label: z.string(),
  purchaseGameType: configCTAPurchaseType,
  isOpenNewWindow: z.boolean()
})

export interface CTAButtonConfig extends z.infer<typeof CTAButtonConfig> {}

export const PlayerPortalHomepageConfig = z.object({
  isDisabled: z.boolean(),
  redirectionURL: z.string(),
  siteBrandURL: z.string(),
  intro: IntroConfig,
  background: HomepageBackgroundConfig,
  CTAButton: CTAButtonConfig
})

export interface PlayerPortalHomepageConfig extends z.infer<typeof PlayerPortalHomepageConfig> {}

export enum PlayerPortalFooterIDs {
  COPYRIGHT = 'copyright',
  PRIVACY_POLICY = 'privacyPolicy',
  LEGAL = 'legal',
  TERMS_OF_USE = 'termsOfUse',
  ADDITIONAL_1 = 'additional1',
  ADDITIONAL_2 = 'additional2'
}

export type PlayerPortalFooterIDsUnion = `${PlayerPortalFooterIDs}`

export const PlayerPortalFooterConfigLink = z.object({
  id: z.string(),
  name: z.string(),
  link: z.string()
})

export interface PlayerPortalFooterConfigLink extends z.infer<typeof PlayerPortalFooterConfigLink> {}

export const PlayerPortalFooterConfig = z.object({
  links: z.array(PlayerPortalFooterConfigLink)
})

export interface PlayerPortalFooterConfig extends z.infer<typeof PlayerPortalFooterConfig> {}

export enum PlayerPortalHomepageKeys {
  IS_DISABLED = 'isDisabled',
  REDIRECTION_URL = 'redirectionURL',
  SITE_BRAND_URL = 'siteBrandURL'
}

export const PlayerPortalHeaderCustomizationConfig = z.object({
  isEnabled: z.boolean(),
  customHTML: z.string(),
  customCSS: z.string(),
  isSticky: z.boolean(),
  stickyHeight: z.number()
})

export interface PlayerPortalHeaderCustomizationConfig extends z.infer<typeof PlayerPortalHeaderCustomizationConfig> {}

export const PlayerPortalFooterCustomizationConfig = z.object({
  isEnabled: z.boolean(),
  customHTML: z.string(),
  customCSS: z.string()
})

export interface PlayerPortalFooterCustomizationConfig extends z.infer<typeof PlayerPortalFooterCustomizationConfig> {}

export const PlayerPortalCustomClassPageScrollEventConfig = z.object({
  isEnabled: z.boolean(),
  elementSelector: z.string(),
  customClassName: z.string()
})

export interface PlayerPortalCustomClassPageScrollEventConfig extends z.infer<typeof PlayerPortalCustomClassPageScrollEventConfig> {}

export const PlayerPortalConfigData = z.object({
  launcherDownloadLink: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  metaData: Config.merge(
    z.object({
      data: z.object({
        description: z.string(),
        image: z.string(),
        title: z.string()
      })
    })
  ),
  pageConfig: Config.merge(
    z.object({
      data: PageConfig
    })
  ),
  footer: Config.merge(
    z.object({
      data: z.object({
        value: PlayerPortalFooterConfig
      })
    })
  ),
  homepage: Config.merge(
    z.object({
      data: PlayerPortalHomepageConfig
    })
  ),
  logoVariant: Config.merge(
    z.object({
      data: LogoVariantConfig
    })
  ),
  customHeader: Config.merge(
    z.object({
      data: PlayerPortalHeaderCustomizationConfig
    })
  ),
  customFooter: Config.merge(
    z.object({
      data: PlayerPortalFooterCustomizationConfig
    })
  ),
  customClassPageScrollEvent: Config.merge(
    z.object({
      data: PlayerPortalCustomClassPageScrollEventConfig
    })
  )
})

export interface PlayerPortalConfigData extends z.infer<typeof PlayerPortalConfigData> {}
