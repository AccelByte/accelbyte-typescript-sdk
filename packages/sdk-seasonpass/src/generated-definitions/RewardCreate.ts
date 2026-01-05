/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image.js'
import { RewardCurrency } from './RewardCurrency.js'

export const RewardCreate = z.object({
  code: z.string(),
  currency: RewardCurrency.nullish(),
  image: Image.nullish(),
  itemId: z.string().nullish(),
  quantity: z.number().int().nullish(),
  type: z.enum(['CURRENCY', 'ITEM'])
})

export interface RewardCreate extends z.TypeOf<typeof RewardCreate> {}
