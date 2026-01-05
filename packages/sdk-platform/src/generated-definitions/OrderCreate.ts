/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderCreate = z.object({
  currencyCode: z.string(),
  discountCodes: z.array(z.string()).nullish(),
  discountedPrice: z.number().int(),
  ext: z.record(z.any()).nullish(),
  itemId: z.string(),
  language: z.string().nullish(),
  price: z.number().int().nullish(),
  quantity: z.number().int(),
  region: z.string().nullish(),
  returnUrl: z.string().nullish(),
  sectionId: z.string().nullish()
})

export interface OrderCreate extends z.TypeOf<typeof OrderCreate> {}
