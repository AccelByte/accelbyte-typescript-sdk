/*
 * Copyright (c) 2023-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'
import { LogoVariantConfig, PageConfig, ThirdPartyLoginConfig } from './base-configs.js'
import { Config } from '../../generated-definitions/Config.js'
import { AgeGatingConfig } from './age-gating.js'

export const LoginConfigData = z.object({
  ageGating: Config.merge(
    z.object({
      data: AgeGatingConfig
    })
  ),
  logoVariant: Config.merge(
    z.object({
      data: LogoVariantConfig
    })
  ),
  pageConfig: Config.merge(
    z.object({
      data: PageConfig
    })
  ),
  thirdPartyLogin: Config.merge(
    z.object({
      data: z.array(ThirdPartyLoginConfig)
    })
  )
})

export interface LoginConfigData extends z.infer<typeof LoginConfigData> {}
