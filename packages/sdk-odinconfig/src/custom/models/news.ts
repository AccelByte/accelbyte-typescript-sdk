/*
 * Copyright (c) 2023-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Config } from '../../generated-definitions/Config.js'
import { z } from 'zod'
import { PageConfig } from './base-configs.js'

export const NewsConfigData = z.object({
  pageConfig: z.optional(
    Config.merge(
      z.object({
        data: PageConfig
      })
    )
  )
})

export interface NewsConfigData extends z.infer<typeof NewsConfigData> {}
