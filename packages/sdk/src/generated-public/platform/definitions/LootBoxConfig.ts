/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LootBoxReward } from './LootBoxReward'

export const LootBoxConfig = z.object({ rewardCount: z.number().int().nullish(), rewards: z.array(LootBoxReward).nullish() })

export type LootBoxConfig = z.TypeOf<typeof LootBoxConfig>
