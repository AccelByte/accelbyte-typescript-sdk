/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SeasonSummary } from './SeasonSummary.js'

export const ListUserSeasonInfo = z.object({
  cleared: z.boolean(),
  currentTierIndex: z.number().int(),
  enrolledAt: z.string(),
  id: z.string(),
  lastTierIndex: z.number().int(),
  namespace: z.string(),
  season: SeasonSummary.nullish(),
  seasonId: z.string(),
  userId: z.string()
})

export interface ListUserSeasonInfo extends z.TypeOf<typeof ListUserSeasonInfo> {}
