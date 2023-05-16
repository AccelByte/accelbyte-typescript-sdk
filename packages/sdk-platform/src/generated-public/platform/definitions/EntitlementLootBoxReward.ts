/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementLootBoxReward = z.object({
  count: z.number().int().nullish(),
  itemId: z.string().nullish(),
  itemSku: z.string().nullish()
})

export interface EntitlementLootBoxReward extends z.TypeOf<typeof EntitlementLootBoxReward> {}
