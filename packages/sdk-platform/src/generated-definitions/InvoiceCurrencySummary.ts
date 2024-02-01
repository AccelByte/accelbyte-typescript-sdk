/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencySummary } from './CurrencySummary.js'

export const InvoiceCurrencySummary = z.object({
  currency: CurrencySummary,
  salesVolume: z.number().int(),
  subtotalPrice: z.number().int(),
  totalPrice: z.number().int(),
  totalTax: z.number().int()
})

export interface InvoiceCurrencySummary extends z.TypeOf<typeof InvoiceCurrencySummary> {}
