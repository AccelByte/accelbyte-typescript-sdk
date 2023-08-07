/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'
import { LogoVariantConfig } from './base-configs.js'
import { Config } from '../../generated-public/odin-config/definitions/Config.js'

export const LoginConfigData = z.object({
  logoVariant: Config.merge(
    z.object({
      data: LogoVariantConfig
    })
  )
})

export interface LoginConfigData extends z.infer<typeof LoginConfigData> {}
