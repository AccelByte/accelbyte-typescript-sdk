/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditRevocation } from './CreditRevocation.js'
import { EntitlementRevocation } from './EntitlementRevocation.js'
import { ItemRevocation } from './ItemRevocation.js'

export const RevocationResult = z.object({
  creditRevocations: z.array(CreditRevocation).nullish(),
  entitlementRevocations: z.array(EntitlementRevocation).nullish(),
  id: z.string(),
  isReplayed: z.boolean().nullish(),
  itemRevocations: z.array(ItemRevocation).nullish(),
  requestId: z.string().nullish(),
  status: z.enum(['FAIL', 'SUCCESS'])
})

export interface RevocationResult extends z.TypeOf<typeof RevocationResult> {}
