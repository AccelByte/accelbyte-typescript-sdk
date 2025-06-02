/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformRewardCurrency } from './PlatformRewardCurrency.js'
import { PlatformRewardItem } from './PlatformRewardItem.js'

export const PlatformReward = z.object({
  currency: PlatformRewardCurrency.nullish(),
  item: PlatformRewardItem.nullish(),
  quantity: z.number().int().nullish(),
  type: z.enum(['CURRENCY', 'ITEM']).nullish()
})

export interface PlatformReward extends z.TypeOf<typeof PlatformReward> {}
