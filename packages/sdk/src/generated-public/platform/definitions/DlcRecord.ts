/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformReward } from './PlatformReward'
import { RevocationResult } from './RevocationResult'
import { RevokeResult } from './RevokeResult'

export const DlcRecord = z.object({
  id: z.string().nullish(),
  obtainedAt: z.string().nullish(),
  rewards: z.array(PlatformReward).nullish(),
  status: z.enum(['REVOKED', 'FULFILLED', 'REVOKE_FAILED']).nullish(),
  revokedAt: z.string().nullish(),
  transactionId: z.string().nullish(),
  revokeResults: z.array(RevokeResult).nullish(),
  revocationResult: RevocationResult.nullish(),
  sources: z.array(z.string()).nullish(),
  version: z.number().int().nullish()
})

export interface DlcRecord extends z.TypeOf<typeof DlcRecord> {}
