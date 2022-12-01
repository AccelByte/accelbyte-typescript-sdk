/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SimpleUserPlatformInfoV3 } from './SimpleUserPlatformInfoV3'

export const DistinctLinkedPlatformV3 = z.object({
  details: z.array(SimpleUserPlatformInfoV3),
  linkedAt: z.string(),
  platformName: z.string(),
  platformUserId: z.string().nullish()
})

export type DistinctLinkedPlatformV3 = z.TypeOf<typeof DistinctLinkedPlatformV3>
