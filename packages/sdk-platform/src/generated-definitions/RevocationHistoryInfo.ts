/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditRevocation } from './CreditRevocation.js'
import { EntitlementRevocation } from './EntitlementRevocation.js'
import { ItemRevocation } from './ItemRevocation.js'
import { RevocationError } from './RevocationError.js'
import { RevokeEntry } from './RevokeEntry.js'

export const RevocationHistoryInfo = z.object({
  createdAt: z.string().nullish(),
  creditRevocations: z.array(CreditRevocation).nullish(),
  entitlementRevocations: z.array(EntitlementRevocation).nullish(),
  id: z.string().nullish(),
  itemRevocations: z.array(ItemRevocation).nullish(),
  meta: z.record(z.any()).nullish(),
  namespace: z.string().nullish(),
  revocationErrors: z.array(RevocationError).nullish(),
  revokeEntries: z.array(RevokeEntry).nullish(),
  source: z.string().nullish(),
  status: z.enum(['FAIL', 'SUCCESS']).nullish(),
  transactionId: z.string().nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string().nullish()
})

export interface RevocationHistoryInfo extends z.TypeOf<typeof RevocationHistoryInfo> {}
