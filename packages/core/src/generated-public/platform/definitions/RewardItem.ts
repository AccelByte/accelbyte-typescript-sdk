/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RewardItem = z.object({
  itemId: z.string().nullish(),
  quantity: z.number().int().nullish(),
  duration: z.number().int().nullish()
})

export type RewardItem = z.TypeOf<typeof RewardItem>
