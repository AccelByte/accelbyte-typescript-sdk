/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SubItemAvailablePrice } from './SubItemAvailablePrice.js'

export const AvailablePrice = z.object({
  currencyCode: z.string(),
  currencyNamespace: z.string(),
  discountExpireAt: z.string().nullish(),
  discountPurchaseAt: z.string().nullish(),
  discountedPrice: z.number().int(),
  expireAt: z.string().nullish(),
  price: z.number().int(),
  priceDetails: z.array(SubItemAvailablePrice).nullish(),
  purchaseAt: z.string().nullish()
})

export interface AvailablePrice extends z.TypeOf<typeof AvailablePrice> {}
