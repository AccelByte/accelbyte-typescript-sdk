/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InvoiceCurrencySummary } from './InvoiceCurrencySummary'

export const InvoiceSummary = z.object({ totalSalesVolume: z.number().int(), invoiceCurrencySummary: z.array(InvoiceCurrencySummary) })

export type InvoiceSummary = z.TypeOf<typeof InvoiceSummary>
