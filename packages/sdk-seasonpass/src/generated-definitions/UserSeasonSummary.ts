/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserSeasonSummary = z.object({
  cleared: z.boolean().nullish(),
  createdAt: z.string().nullish(),
  currentExp: z.number().int().nullish(),
  currentTierIndex: z.number().int().nullish(),
  enrolledAt: z.string().nullish(),
  enrolledPasses: z.array(z.string()).nullish(),
  id: z.string().nullish(),
  lastTierIndex: z.number().int().nullish(),
  namespace: z.string(),
  requiredExp: z.number().int().nullish(),
  seasonId: z.string().nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string()
})

export interface UserSeasonSummary extends z.TypeOf<typeof UserSeasonSummary> {}
