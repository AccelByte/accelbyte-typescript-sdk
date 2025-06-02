/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AppleIapConfigRequest = z.object({
  appAppleId: z.number().int().nullish(),
  bundleId: z.string(),
  issuerId: z.string().nullish(),
  keyId: z.string().nullish(),
  password: z.string().nullish(),
  version: z.enum(['V1', 'V2']).nullish()
})

export interface AppleIapConfigRequest extends z.TypeOf<typeof AppleIapConfigRequest> {}
