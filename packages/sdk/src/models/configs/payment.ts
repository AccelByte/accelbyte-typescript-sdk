/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Config } from '@accelbyte/sdk/generated-public/odin-config/definitions/Config'
import { PageConfig } from './base-configs'

export const PaymentConfigData = z.object({
  pageConfig: Config.merge(
    z.object({
      data: PageConfig
    })
  )
})
export interface PaymentConfigData extends z.infer<typeof PaymentConfigData> {}
