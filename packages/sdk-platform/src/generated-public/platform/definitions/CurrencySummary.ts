/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CurrencySummary = z.object({
  currencyCode: z.string(),
  currencySymbol: z.string(),
  currencyType: z.enum(['REAL', 'VIRTUAL']),
  namespace: z.string(),
  decimals: z.number().int()
})

export interface CurrencySummary extends z.TypeOf<typeof CurrencySummary> {}