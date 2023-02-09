/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreditRevocation = z.object({
  walletId: z.string().nullish(),
  currencyCode: z.string().nullish(),
  balanceOrigin: z.string().nullish(),
  amount: z.number().int().nullish(),
  status: z.enum(['SUCCESS', 'FAIL']).nullish(),
  revocationStrategy: z.string().nullish(),
  skipped: z.boolean().nullish(),
  reason: z.string().nullish()
})

export type CreditRevocation = z.TypeOf<typeof CreditRevocation>
