/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XblIapConfigInfo = z.object({
  businessPartnerCertFileName: z.string().nullish(),
  namespace: z.string(),
  password: z.string().nullish(),
  relyingPartyCert: z.string().nullish()
})

export interface XblIapConfigInfo extends z.TypeOf<typeof XblIapConfigInfo> {}
