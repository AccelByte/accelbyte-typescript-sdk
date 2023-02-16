/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditRevocation } from './CreditRevocation'
import { EntitlementRevocation } from './EntitlementRevocation'
import { ItemRevocation } from './ItemRevocation'
import { RevokeEntry } from './RevokeEntry'

export const RevocationHistoryInfo = z.object({
  id: z.string().nullish(),
  namespace: z.string().nullish(),
  userId: z.string().nullish(),
  meta: z.record(z.any()).nullish(),
  source: z.string().nullish(),
  status: z.enum(['SUCCESS', 'FAIL']).nullish(),
  revokeEntries: z.array(RevokeEntry).nullish(),
  itemRevocations: z.array(ItemRevocation).nullish(),
  creditRevocations: z.array(CreditRevocation).nullish(),
  entitlementRevocations: z.array(EntitlementRevocation).nullish(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface RevocationHistoryInfo extends z.TypeOf<typeof RevocationHistoryInfo> {}
