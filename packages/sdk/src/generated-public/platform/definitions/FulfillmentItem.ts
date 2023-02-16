/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillmentItem = z.object({
  storeId: z.string().nullish(),
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  itemType: z
    .enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION', 'LOOTBOX'])
    .nullish(),
  itemName: z.string().nullish(),
  quantity: z.number().int(),
  extraSubscriptionDays: z.number().int().nullish()
})

export interface FulfillmentItem extends z.TypeOf<typeof FulfillmentItem> {}
