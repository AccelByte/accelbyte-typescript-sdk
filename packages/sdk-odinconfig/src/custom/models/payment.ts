/*
 * Copyright (c) 2023-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PageConfig } from './base-configs.js'
import { Config } from '../../generated-definitions/Config.js'

export const PaymentConfigData = z.object({
  pageConfig: Config.merge(
    z.object({
      data: PageConfig
    })
  )
})

export interface PaymentConfigData extends z.infer<typeof PaymentConfigData> {}
