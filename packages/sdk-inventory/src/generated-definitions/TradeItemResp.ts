/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TradeItemResp = z.object({ qty: z.number().int(), slotId: z.string(), sourceItemId: z.string() })

export interface TradeItemResp extends z.TypeOf<typeof TradeItemResp> {}
