/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformRewardCurrency } from './PlatformRewardCurrency'
import { PlatformRewardItem } from './PlatformRewardItem'

export const PlatformReward = z.object({
  type: z.enum(['ITEM', 'CURRENCY']).nullish(),
  item: PlatformRewardItem.nullish(),
  currency: PlatformRewardCurrency.nullish(),
  quantity: z.number().int().nullish()
})

export type PlatformReward = z.TypeOf<typeof PlatformReward>
