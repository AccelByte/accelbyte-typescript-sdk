/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OrderCreationOptions } from './OrderCreationOptions.js'

export const AdminOrderCreate = z.object({
  currencyCode: z.string(),
  currencyNamespace: z.string().nullish(),
  discountedPrice: z.number().int(),
  ext: z.record(z.any()).nullish(),
  itemId: z.string(),
  language: z.string().nullish(),
  options: OrderCreationOptions.nullish(),
  platform: z.enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'Xbox']).nullish(),
  price: z.number().int(),
  quantity: z.number().int(),
  region: z.string(),
  returnUrl: z.string().nullish(),
  sandbox: z.boolean().nullish(),
  sectionId: z.string().nullish()
})

export interface AdminOrderCreate extends z.TypeOf<typeof AdminOrderCreate> {}
