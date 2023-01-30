/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformReward } from './PlatformReward'
import { RevokeItemSummary } from './RevokeItemSummary'

export const RevokeResult = z.object({
  reward: PlatformReward.nullish(),
  revokeItemSummaries: z.array(RevokeItemSummary).nullish(),
  status: z.enum(['SKIPPED', 'COMPLETED']).nullish()
})

export type RevokeResult = z.TypeOf<typeof RevokeResult>
