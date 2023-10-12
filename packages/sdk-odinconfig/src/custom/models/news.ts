/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Config } from '../../generated-public/odin-config/definitions/Config.js'
import { z } from 'zod'
import { PageConfig } from './base-configs.js'

export const DisplayNewsPage = z.object({
  isPlayerPortalEnabled: z.boolean(),
  isLauncherEnabled: z.boolean()
})

export interface DisplayNewsPage extends z.TypeOf<typeof DisplayNewsPage> {}

export const NewsConfigData = z.object({
  displayNewsPage: Config.merge(
    z.object({
      data: DisplayNewsPage
    })
  ),
  pageConfig: z.optional(
    Config.merge(
      z.object({
        data: PageConfig
      })
    )
  )
})

export interface NewsConfigData extends z.infer<typeof NewsConfigData> {}
