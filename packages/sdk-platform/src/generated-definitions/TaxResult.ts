/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TaxResult = z.object({
  enableTax: z.boolean().nullish(),
  formattedTax: z.string().nullish(),
  state: z.string().nullish(),
  tax: z.number().int().nullish()
})

export interface TaxResult extends z.TypeOf<typeof TaxResult> {}
