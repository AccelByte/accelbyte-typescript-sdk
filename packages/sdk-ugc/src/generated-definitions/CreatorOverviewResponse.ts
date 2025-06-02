/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreatorOverviewResponse = z.object({
  followCount: z.number().int(),
  followingCount: z.number().int(),
  id: z.string(),
  namespace: z.string(),
  parentNamespace: z.string(),
  totalLikedContent: z.number().int()
})

export interface CreatorOverviewResponse extends z.TypeOf<typeof CreatorOverviewResponse> {}
