/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XblIapConfigInfo = z.object({
  namespace: z.string(),
  relyingPartyCert: z.string().nullish(),
  businessPartnerCertFileName: z.string().nullish(),
  password: z.string().nullish()
})

export interface XblIapConfigInfo extends z.TypeOf<typeof XblIapConfigInfo> {}
