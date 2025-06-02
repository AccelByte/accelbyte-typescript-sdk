/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencySummary } from './CurrencySummary.js'

export const OrderSummary = z.object({ currency: CurrencySummary.nullish(), ext: z.record(z.any()).nullish(), free: z.boolean().nullish() })

export interface OrderSummary extends z.TypeOf<typeof OrderSummary> {}
