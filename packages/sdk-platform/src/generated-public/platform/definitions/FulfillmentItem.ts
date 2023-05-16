/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillmentItem = z.object({
  extraSubscriptionDays: z.number().int().nullish(),
  itemId: z.string().nullish(),
  itemName: z.string().nullish(),
  itemSku: z.string().nullish(),
  itemType: z
    .enum(['APP', 'BUNDLE', 'CODE', 'COINS', 'EXTENSION', 'INGAMEITEM', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SEASON', 'SUBSCRIPTION'])
    .nullish(),
  quantity: z.number().int(),
  storeId: z.string().nullish()
})

export interface FulfillmentItem extends z.TypeOf<typeof FulfillmentItem> {}
