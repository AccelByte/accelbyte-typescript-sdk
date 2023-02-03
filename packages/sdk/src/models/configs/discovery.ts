/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Config } from '@accelbyte/sdk/generated-public/odin-config/definitions/Config'
import { z } from 'zod'
import { ColorConfigs, FontConfigs } from './base-configs'

export const CompanyLogo = z.object({
  url: z.string(),
  name: z.string()
})

export type CompanyLogo = z.TypeOf<typeof CompanyLogo>

export const CompanyLogoConfig = z.object({
  images: z.array(CompanyLogo),
  defaultIndex: z.number()
})

export type CompanyLogoConfig = z.TypeOf<typeof CompanyLogoConfig>

export const GlobalStyleConfig = z.object({
  global: z.object({
    colors: ColorConfigs,
    fonts: FontConfigs
  })
})
export type GlobalStyleConfig = z.infer<typeof GlobalStyleConfig>

export const SocialLinkConfig = z.object({
  url: z.string(),
  platform: z.string(),
  apps: z.array(z.string())
})
export type SocialLinkConfig = z.infer<typeof SocialLinkConfig>

export const TemplateInfoConfig = z.object({
  draft: z.string(),
  published: z.string()
})
export type TemplateInfoConfig = z.infer<typeof TemplateInfoConfig>

export const DiscoveryConfigData = z.object({
  ppTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  launcherTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  loginTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  legalTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  paymentTemplateInfo: Config.merge(
    z.object({
      data: TemplateInfoConfig
    })
  ),
  ppFeatureFlags: Config,
  launcherFeatureFlags: Config,
  loginFeatureFlags: Config,
  experimentalFeatureFlags: Config,
  socialLinks: Config.merge(
    z.object({
      data: z.object({
        value: z.array(SocialLinkConfig)
      })
    })
  ),
  copyright: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  globalPageConfig: Config.merge(
    z.object({
      data: GlobalStyleConfig,
      name: z.string(),
      format: z.string(),
      updatedAt: z.string(),
      version: z.number()
    })
  ),
  companyLogo: Config.merge(
    z.object({
      data: CompanyLogoConfig,
      name: z.string(),
      format: z.string(),
      updatedAt: z.string(),
      version: z.number()
    })
  ),
  templateConfig: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  appId: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  avatarsList: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  brandName: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  ),
  favicon: Config.merge(
    z.object({
      data: z.object({
        value: z.string()
      })
    })
  )
})

export type DiscoveryConfigData = z.infer<typeof DiscoveryConfigData>
