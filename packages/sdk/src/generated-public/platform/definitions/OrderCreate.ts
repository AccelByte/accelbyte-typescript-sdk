/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderCreate = z.object({
  itemId: z.string(),
  quantity: z.number().int(),
  price: z.number().int(),
  discountedPrice: z.number().int(),
  currencyCode: z.string(),
  region: z.string().nullish(),
  language: z.string().nullish(),
  sectionId: z.string().nullish(),
  returnUrl: z.string().nullish(),
  ext: z.record(z.any()).nullish()
})

export interface OrderCreate extends z.TypeOf<typeof OrderCreate> {}
