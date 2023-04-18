/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreditRevocation } from './CreditRevocation'
import { EntitlementRevocation } from './EntitlementRevocation'
import { ItemRevocation } from './ItemRevocation'

export const RevocationResult = z.object({
  id: z.string(),
  status: z.enum(['SUCCESS', 'FAIL']),
  itemRevocations: z.array(ItemRevocation).nullish(),
  creditRevocations: z.array(CreditRevocation).nullish(),
  entitlementRevocations: z.array(EntitlementRevocation).nullish()
})

export interface RevocationResult extends z.TypeOf<typeof RevocationResult> {}
