/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TicketSaleIncrementResult = z.object({ maxSaleCount: z.number().int(), success: z.boolean() })

export interface TicketSaleIncrementResult extends z.TypeOf<typeof TicketSaleIncrementResult> {}
