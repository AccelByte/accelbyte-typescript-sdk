/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SeasonSummary } from './SeasonSummary.js'

export const ClaimableUserSeasonInfo = z.object({
  claimingRewards: z.record(z.record(z.array(z.string()))),
  cleared: z.boolean(),
  createdAt: z.string(),
  currentExp: z.number().int(),
  currentTierIndex: z.number().int(),
  enrolledAt: z.string(),
  enrolledPasses: z.array(z.string()),
  id: z.string(),
  lastTierIndex: z.number().int(),
  namespace: z.string(),
  requiredExp: z.number().int(),
  season: SeasonSummary.nullish(),
  seasonId: z.string(),
  toClaimRewards: z.record(z.record(z.array(z.string()))),
  totalExp: z.number().int().nullish(),
  totalPaidForExp: z.number().int().nullish(),
  totalSweatExp: z.number().int().nullish(),
  updatedAt: z.string(),
  userId: z.string()
})

export interface ClaimableUserSeasonInfo extends z.TypeOf<typeof ClaimableUserSeasonInfo> {}
