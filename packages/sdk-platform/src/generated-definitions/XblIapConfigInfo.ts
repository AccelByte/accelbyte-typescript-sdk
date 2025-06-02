/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XblIapConfigInfo = z.object({
  businessPartnerCertExpiredTime: z.string().nullish(),
  businessPartnerCertFileName: z.string().nullish(),
  enableClawback: z.boolean().nullish(),
  entraAppClientId: z.string().nullish(),
  entraAppClientSecret: z.string().nullish(),
  entraTenantId: z.string().nullish(),
  namespace: z.string(),
  password: z.string().nullish(),
  relyingPartyCert: z.string().nullish()
})

export interface XblIapConfigInfo extends z.TypeOf<typeof XblIapConfigInfo> {}
