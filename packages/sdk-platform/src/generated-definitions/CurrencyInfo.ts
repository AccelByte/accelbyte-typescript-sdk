/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CurrencyInfo = z.object({
  createdAt: z.string(),
  currencyCode: z.string(),
  currencySymbol: z.string(),
  currencyType: z.enum(['REAL', 'VIRTUAL']),
  decimals: z.number().int(),
  localizationDescriptions: z.record(z.string()).nullish(),
  namespace: z.string(),
  updatedAt: z.string()
})

export interface CurrencyInfo extends z.TypeOf<typeof CurrencyInfo> {}
