/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AppleIapConfigInfo = z.object({
  appAppleId: z.number().int().nullish(),
  authKeyFileName: z.string().nullish(),
  bundleId: z.string().nullish(),
  issuerId: z.string().nullish(),
  keyId: z.string().nullish(),
  namespace: z.string(),
  password: z.string().nullish(),
  version: z.enum(['V1', 'V2']).nullish()
})

export interface AppleIapConfigInfo extends z.TypeOf<typeof AppleIapConfigInfo> {}
