/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Config } from '../../generated-public/odin-config/definitions/Config.js'
import { LogoVariantConfig, PageConfig } from './base-configs.js'

export enum PlayerPortalHomePageKeys {
  IS_DISABLED = 'isDisabled',
  REDIRECTION_URL = 'redirectionURL',
  SITE_BRAND_URL = 'siteBrandURL'
}

export const PlayerPortalHomepageConfig = z.object({
  isDisabled: z.boolean(),
  redirectionURL: z.string(),
  siteBrandURL: z.string()
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
