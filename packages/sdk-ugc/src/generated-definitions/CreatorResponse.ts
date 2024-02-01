/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreatorFollowState } from './CreatorFollowState.js'

export const CreatorResponse = z.object({
  creatorFollowState: CreatorFollowState,
  followCount: z.number().int(),
  followingCount: z.number().int(),
  id: z.string(),
  namespace: z.string(),
  parentNamespace: z.string(),
  totalLikedContent: z.number().int()
})

export interface CreatorResponse extends z.TypeOf<typeof CreatorResponse> {}
