/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencySummary } from './CurrencySummary'

export const InvoiceCurrencySummary = z.object({
  currency: CurrencySummary,
  subtotalPrice: z.number().int(),
  totalTax: z.number().int(),
  totalPrice: z.number().int(),
  salesVolume: z.number().int()
})

export type InvoiceCurrencySummary = z.TypeOf<typeof InvoiceCurrencySummary>
