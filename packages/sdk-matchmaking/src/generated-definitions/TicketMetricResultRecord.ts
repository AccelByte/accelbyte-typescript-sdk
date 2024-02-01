/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TicketMetricResultRecord = z.object({ queueTime: z.number().int() })

export interface TicketMetricResultRecord extends z.TypeOf<typeof TicketMetricResultRecord> {}
