/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformReward } from './PlatformReward.js'
import { RewardMigrationResult } from './RewardMigrationResult.js'

export const EntitlementOriginSyncResult = z.object({
  reason: z.string().nullish(),
  reward: PlatformReward.nullish(),
  summary: z.array(RewardMigrationResult).nullish()
})

export interface EntitlementOriginSyncResult extends z.TypeOf<typeof EntitlementOriginSyncResult> {}
