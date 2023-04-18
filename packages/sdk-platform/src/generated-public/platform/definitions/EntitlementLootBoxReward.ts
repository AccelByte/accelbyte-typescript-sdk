/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementLootBoxReward = z.object({
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  count: z.number().int().nullish()
})

export interface EntitlementLootBoxReward extends z.TypeOf<typeof EntitlementLootBoxReward> {}
