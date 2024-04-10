/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TradeItemResp } from './TradeItemResp.js'

export const MoveItemsResp = z.object({
  createdAt: z.string(),
  dstInventoryId: z.string(),
  items: z.array(TradeItemResp),
  namespace: z.string(),
  srcInventoryId: z.string()
})

export interface MoveItemsResp extends z.TypeOf<typeof MoveItemsResp> {}
