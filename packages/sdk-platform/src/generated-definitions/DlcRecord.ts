/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementOriginSyncResult } from './EntitlementOriginSyncResult.js'
import { PlatformReward } from './PlatformReward.js'
import { RevocationResult } from './RevocationResult.js'
import { RevokeResult } from './RevokeResult.js'

export const DlcRecord = z.object({
  entitlementOriginSyncResult: z.array(EntitlementOriginSyncResult).nullish(),
  entitlementOriginSyncStatus: z.enum(['NOT_SYNCED', 'SYNCED', 'SYNCED_FAILED']).nullish(),
  id: z.string().nullish(),
  metadata: z.record(z.any()).nullish(),
  obtainedAt: z.string().nullish(),
  revocationResult: RevocationResult.nullish(),
  revokeResults: z.array(RevokeResult).nullish(),
  revokedAt: z.string().nullish(),
  rewards: z.array(PlatformReward).nullish(),
  sources: z.array(z.string()).nullish(),
  status: z.enum(['FULFILLED', 'REVOKED', 'REVOKE_FAILED']).nullish(),
  transactionId: z.string().nullish(),
  version: z.number().int().nullish()
})

export interface DlcRecord extends z.TypeOf<typeof DlcRecord> {}
