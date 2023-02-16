/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LootBoxReward } from './LootBoxReward'

export const LootBoxConfig = z.object({
  rewardCount: z.number().int().nullish(),
  rewards: z.array(LootBoxReward).nullish(),
  rollFunction: z.enum(['DEFAULT', 'CUSTOM']).nullish()
})

export interface LootBoxConfig extends z.TypeOf<typeof LootBoxConfig> {}
