/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Config } from '@od-web-sdk/generated-public/odin-config/definitions/Config'
import { z } from 'zod'

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
  ppFeatureFlags: Config,
  launcherFeatureFlags: Config,
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
  ).optional() // TODO remove optional after it's migrated
})

export type DiscoveryConfigData = z.infer<typeof DiscoveryConfigData>
