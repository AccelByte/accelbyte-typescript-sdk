/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformRewardCurrency } from './PlatformRewardCurrency.js'
import { SimpleDlcRewardItem } from './SimpleDlcRewardItem.js'

export const SimpleUserDlcRewardContent = z.object({
  currency: PlatformRewardCurrency.nullish(),
  item: SimpleDlcRewardItem.nullish(),
  obtainedAt: z.string().nullish(),
  quantity: z.number().int().nullish(),
  type: z.enum(['CURRENCY', 'ITEM']).nullish()
})

export interface SimpleUserDlcRewardContent extends z.TypeOf<typeof SimpleUserDlcRewardContent> {}
