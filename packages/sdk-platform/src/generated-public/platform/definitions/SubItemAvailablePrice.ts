/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SubItemAvailablePrice = z.object({
  discountedPrice: z.number().int(),
  itemId: z.string(),
  itemName: z.string(),
  itemSku: z.string(),
  owned: z.boolean().nullish(),
  price: z.number().int(),
  quantity: z.number().int().nullish()
})

export interface SubItemAvailablePrice extends z.TypeOf<typeof SubItemAvailablePrice> {}
