/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image.js'
import { RewardCurrency } from './RewardCurrency.js'

export const RewardUpdate = z.object({
  currency: RewardCurrency.nullish(),
  image: Image.nullish(),
  itemId: z.string().nullish(),
  nullFields: z.array(z.string()).nullish(),
  quantity: z.number().int().nullish(),
  type: z.enum(['CURRENCY', 'ITEM']).nullish()
})

export interface RewardUpdate extends z.TypeOf<typeof RewardUpdate> {}
