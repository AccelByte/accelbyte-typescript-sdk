/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemDynamicDataInfo = z.object({
  availableCount: z.number().int(),
  itemId: z.string(),
  namespace: z.string(),
  userAvailableCount: z.number().int(),
  userPurchaseLimit: z.number().int()
})

export interface ItemDynamicDataInfo extends z.TypeOf<typeof ItemDynamicDataInfo> {}
