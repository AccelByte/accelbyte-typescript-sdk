/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TaxResult = z.object({
  enableTax: z.boolean().nullish(),
  tax: z.number().int().nullish(),
  formattedTax: z.string().nullish(),
  state: z.string().nullish()
})

export type TaxResult = z.TypeOf<typeof TaxResult>
