/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemDynamicDataInfo = z.object({
  itemId: z.string(),
  namespace: z.string(),
  availableCount: z.number().int(),
  userAvailableCount: z.number().int(),
  userPurchaseLimit: z.number().int()
})

export type ItemDynamicDataInfo = z.TypeOf<typeof ItemDynamicDataInfo>
