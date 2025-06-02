/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreditRevocation = z.object({
  amount: z.number().int().nullish(),
  balanceOrigin: z.string().nullish(),
  currencyCode: z.string().nullish(),
  customRevocation: z.record(z.any()).nullish(),
  reason: z.string().nullish(),
  revocationStrategy: z.string().nullish(),
  skipped: z.boolean().nullish(),
  status: z.enum(['FAIL', 'SUCCESS']).nullish(),
  walletId: z.string().nullish()
})

export interface CreditRevocation extends z.TypeOf<typeof CreditRevocation> {}
