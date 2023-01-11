/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Config } from '@accelbyte/sdk/generated-public/odin-config/definitions/Config'
import { z } from 'zod'

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

export const LogoVariantConfig = z.object({
  header: z.number(),
  footer: z.number()
})

export type LogoVariantConfig = z.TypeOf<typeof LogoVariantConfig>

export const ColorConfig = z.object({
  hex: z.string(),
  rgb: z.object({
    r: z.number(),
    g: z.number(),
    b: z.number(),
    a: z.number()
  }),
  hsl: z.object({
    h: z.number(),
    s: z.number(),
    l: z.number(),
    a: z.number()
  }),
  hsv: z.object({
    h: z.number(),
    s: z.number(),
    v: z.number(),
    a: z.number()
  }),
  oldHue: z.number(),
  source: z.string()
})
export type ColorConfig = z.infer<typeof ColorConfig>

export const GlobalStyleConfig = z.object({
  global: z.object({
    colors: z.object({
      background: ColorConfig,
      card: ColorConfig,
      overlay: ColorConfig,
      primary: ColorConfig,
      secondary: ColorConfig,
      text: ColorConfig
    }),
    fonts: z.object({
      body: z.string(),
      bodyCss: z.string(),
      customBodyFontUrl: z.string(),
      title: z.string(),
      titleCss: z.string(),
      customTitleFontUrl: z.string()
    })
  })
})
export type GlobalStyleConfig = z.infer<typeof GlobalStyleConfig>

export const DiscoveryConfigData = z.object({
  ppTemplateInfo: Config.merge(
    z.object({
      data: z.object({
        draft: z.string(),
        published: z.string()
      })
    })
  ),
  launcherTemplateInfo: Config.merge(
    z.object({
      data: z.object({
        draft: z.string(),
        published: z.string()
      })
    })
  ),
  loginTemplateInfo: Config.merge(
    z.object({
      data: z.object({
        draft: z.string(),
        published: z.string()
      })
    })
  ),
  legalTemplateInfo: Config.merge(
    z.object({
      data: z.object({
        draft: z.string(),
        published: z.string()
      })
    })
  ),
  ppFeatureFlags: Config,
  launcherFeatureFlags: Config,
  loginFeatureFlags: Config,
  experimentalFeatureFlags: Config,
  socialLinks: Config.merge(
    z.object({
      data: z.object({
        value: z.array(
          z.object({
            url: z.string(),
            platform: z.string(),
            apps: z.array(z.string())
          })
        )
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
  )
})

export type DiscoveryConfigData = z.infer<typeof DiscoveryConfigData>

export const HomepagePPConfig = z.object({
  isDisabled: z.boolean(),
  redirectionURL: z.string(),
  siteBrandURL: z.string()
})
export type HomepagePPConfig = z.infer<typeof HomepagePPConfig>
