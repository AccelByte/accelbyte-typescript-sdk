/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CurrencyCreate = z.object({
  currencyCode: z.string(),
  currencySymbol: z.string().nullish(),
  currencyType: z.enum(['REAL', 'VIRTUAL']).nullish(),
  decimals: z.number().int().nullish(),
  localizationDescriptions: z.record(z.string()).nullish()
})

export interface CurrencyCreate extends z.TypeOf<typeof CurrencyCreate> {}
