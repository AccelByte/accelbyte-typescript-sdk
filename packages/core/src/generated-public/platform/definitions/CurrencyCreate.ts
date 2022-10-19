/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CurrencyCreate = z.object({
  currencyCode: z.string(),
  localizationDescriptions: z.record(z.string()).nullish(),
  currencySymbol: z.string().nullish(),
  currencyType: z.enum(['REAL', 'VIRTUAL']).nullish(),
  decimals: z.number().int().nullish()
})

export type CurrencyCreate = z.TypeOf<typeof CurrencyCreate>
