/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RewardItem = z.object({
  duration: z.number().int().nullish(),
  endDate: z.string().nullish(),
  identityType: z.enum(['ITEM_ID', 'ITEM_SKU']).nullish(),
  itemId: z.string().nullish(),
  quantity: z.number().int().nullish(),
  sku: z.string().nullish()
})

export interface RewardItem extends z.TypeOf<typeof RewardItem> {}
