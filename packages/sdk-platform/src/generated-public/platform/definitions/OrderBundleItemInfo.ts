/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderBundleItemInfo = z.object({
  discountedPrice: z.number().int(),
  itemId: z.string(),
  itemName: z.string(),
  itemSku: z.string(),
  price: z.number().int(),
  purchased: z.boolean().nullish(),
  quantity: z.number().int().nullish()
})

export interface OrderBundleItemInfo extends z.TypeOf<typeof OrderBundleItemInfo> {}
