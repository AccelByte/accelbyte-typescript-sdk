/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformReward } from './PlatformReward'
import { RevokeResult } from './RevokeResult'

export const DlcRecord = z.object({
  id: z.string().nullish(),
  obtainedAt: z.string().nullish(),
  rewards: z.array(PlatformReward).nullish(),
  status: z.enum(['REVOKED', 'FULFILLED']).nullish(),
  revokedAt: z.string().nullish(),
  revokeResults: z.array(RevokeResult).nullish(),
  sources: z.array(z.string()).nullish()
})

export type DlcRecord = z.TypeOf<typeof DlcRecord>
