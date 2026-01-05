/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreditSummary = z.object({
  amount: z.number().int(),
  currencyCode: z.string().nullish(),
  namespace: z.string(),
  userId: z.string(),
  walletId: z.string()
})

export interface CreditSummary extends z.TypeOf<typeof CreditSummary> {}
