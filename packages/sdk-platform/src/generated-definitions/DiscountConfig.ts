/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DiscountCategory } from './DiscountCategory.js'
import { DiscountItem } from './DiscountItem.js'

export const DiscountConfig = z.object({
  categories: z.array(DiscountCategory).nullish(),
  currencyCode: z.string().nullish(),
  currencyNamespace: z.string().nullish(),
  discountAmount: z.number().int().nullish(),
  discountPercentage: z.number().int().nullish(),
  discountType: z.enum(['AMOUNT', 'PERCENTAGE']).nullish(),
  items: z.array(DiscountItem).nullish(),
  restrictType: z.enum(['ITEMS_AND_CATEGORIES', 'NONE']).nullish(),
  stackable: z.boolean().nullish()
})

export interface DiscountConfig extends z.TypeOf<typeof DiscountConfig> {}
