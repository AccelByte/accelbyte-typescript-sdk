/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformReward } from './PlatformReward.js'
import { RevokeItemSummary } from './RevokeItemSummary.js'

export const RevokeResult = z.object({
  revokeItemSummaries: z.array(RevokeItemSummary).nullish(),
  reward: PlatformReward.nullish(),
  status: z.enum(['COMPLETED', 'SKIPPED']).nullish()
})

export interface RevokeResult extends z.TypeOf<typeof RevokeResult> {}
