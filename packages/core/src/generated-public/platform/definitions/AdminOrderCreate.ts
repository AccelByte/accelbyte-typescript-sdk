/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ADtoObjectForOrderCreationOptions } from './ADtoObjectForOrderCreationOptions'

export const AdminOrderCreate = z.object({
  itemId: z.string(),
  quantity: z.number().int(),
  price: z.number().int(),
  discountedPrice: z.number().int(),
  currencyCode: z.string(),
  region: z.string(),
  language: z.string().nullish(),
  returnUrl: z.string().nullish(),
  ext: z.record(z.any()).nullish(),
  sandbox: z.boolean().nullish(),
  platform: z.enum(['Playstation', 'Xbox', 'Steam', 'Epic', 'IOS', 'GooglePlay', 'Nintendo', 'Other']).nullish(),
  options: ADtoObjectForOrderCreationOptions.nullish(),
  currencyNamespace: z.string().nullish()
})

export type AdminOrderCreate = z.TypeOf<typeof AdminOrderCreate>
