/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TradeItem } from './TradeItem.js'

export const MoveItemsReq = z.object({ items: z.array(TradeItem), srcInventoryId: z.string() })

export interface MoveItemsReq extends z.TypeOf<typeof MoveItemsReq> {}
