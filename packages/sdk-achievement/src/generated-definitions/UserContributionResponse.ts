/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserContributionResponse = z.object({
  achievementCode: z.string(),
  canClaimReward: z.boolean(),
  contributedValue: z.number(),
  id: z.string(),
  name: z.record(z.string()),
  namespace: z.string(),
  userId: z.string()
})

export interface UserContributionResponse extends z.TypeOf<typeof UserContributionResponse> {}
