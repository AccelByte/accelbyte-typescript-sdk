/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BoxItem } from './BoxItem'

export const LootBoxReward = z.object({
  name: z.string().nullish(),
  type: z.enum(['REWARD', 'REWARD_GROUP', 'PROBABILITY_GROUP']).nullish(),
  lootBoxItems: z.array(BoxItem).nullish(),
  weight: z.number().int().nullish(),
  odds: z.number().nullish()
})

export type LootBoxReward = z.TypeOf<typeof LootBoxReward>
