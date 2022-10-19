/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RedeemableItem = z.object({
  itemId: z.string(),
  itemName: z.string(),
  quantity: z.number().int().nullish(),
  extraSubscriptionDays: z.number().int().nullish()
})

export type RedeemableItem = z.TypeOf<typeof RedeemableItem>
