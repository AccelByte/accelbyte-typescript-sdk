/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image.js'
import { RewardCurrency } from './RewardCurrency.js'

export const RewardInfo = z.object({
  code: z.string(),
  currency: RewardCurrency.nullish(),
  image: Image.nullish(),
  itemId: z.string().nullish(),
  itemName: z.string().nullish(),
  itemSku: z.string().nullish(),
  itemType: z
    .enum(['APP', 'BUNDLE', 'CODE', 'COINS', 'EXTENSION', 'INGAMEITEM', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SEASON', 'SUBSCRIPTION'])
    .nullish(),
  namespace: z.string(),
  quantity: z.number().int().nullish(),
  seasonId: z.string(),
  type: z.enum(['CURRENCY', 'ITEM'])
})

export interface RewardInfo extends z.TypeOf<typeof RewardInfo> {}
