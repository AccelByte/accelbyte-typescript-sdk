/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BoxItem } from './BoxItem.js'

export const LootBoxReward = z.object({
  lootBoxItems: z.array(BoxItem).nullish(),
  name: z.string().nullish(),
  odds: z.number().nullish(),
  type: z.enum(['PROBABILITY_GROUP', 'REWARD', 'REWARD_GROUP']).nullish(),
  weight: z.number().int().nullish()
})

export interface LootBoxReward extends z.TypeOf<typeof LootBoxReward> {}
