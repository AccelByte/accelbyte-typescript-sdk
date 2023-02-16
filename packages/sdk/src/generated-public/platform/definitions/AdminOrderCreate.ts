/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OrderCreationOptions } from './OrderCreationOptions'

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
  options: OrderCreationOptions.nullish(),
  currencyNamespace: z.string().nullish()
})

export interface AdminOrderCreate extends z.TypeOf<typeof AdminOrderCreate> {}
