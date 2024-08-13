/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SimpleUserPlatformInfoV3 } from './SimpleUserPlatformInfoV3.js'

export const DistinctLinkedPlatformV3 = z.object({
  details: z.array(SimpleUserPlatformInfoV3).nullish(),
  linkedAt: z.string(),
  logoURL: z.string().nullish(),
  platformDisplayName: z.string().nullish(),
  platformGroup: z.string(),
  platformName: z.string(),
  platformUserId: z.string().nullish(),
  status: z.string()
})

export interface DistinctLinkedPlatformV3 extends z.TypeOf<typeof DistinctLinkedPlatformV3> {}
