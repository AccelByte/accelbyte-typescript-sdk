/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CurrencyInfo = z.object({
  currencyCode: z.string(),
  localizationDescriptions: z.record(z.string()).nullish(),
  currencySymbol: z.string(),
  namespace: z.string(),
  currencyType: z.enum(['REAL', 'VIRTUAL']),
  decimals: z.number().int(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type CurrencyInfo = z.TypeOf<typeof CurrencyInfo>
