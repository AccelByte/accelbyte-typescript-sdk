/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SubItemAvailablePrice } from './SubItemAvailablePrice.js'

export const AvailablePrice = z.object({
  currencyCode: z.string(),
  currencyNamespace: z.string(),
  discountedPrice: z.number().int(),
  price: z.number().int(),
  priceDetails: z.array(SubItemAvailablePrice).nullish()
})

export interface AvailablePrice extends z.TypeOf<typeof AvailablePrice> {}
