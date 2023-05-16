/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RewardItem = z.object({
  duration: z.number().int().nullish(),
  endDate: z.string().nullish(),
  itemId: z.string().nullish(),
  quantity: z.number().int().nullish()
})

export interface RewardItem extends z.TypeOf<typeof RewardItem> {}
