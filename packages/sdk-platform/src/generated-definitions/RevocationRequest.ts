/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RevokeEntry } from './RevokeEntry.js'

export const RevocationRequest = z.object({
  meta: z.record(z.any()).nullish(),
  reason: z.string().nullish(),
  requestId: z.string().nullish(),
  revokeEntries: z.array(RevokeEntry).nullish(),
  source: z.enum(['DLC', 'IAP', 'ORDER', 'OTHER']).nullish(),
  transactionId: z.string().nullish()
})

export interface RevocationRequest extends z.TypeOf<typeof RevocationRequest> {}
