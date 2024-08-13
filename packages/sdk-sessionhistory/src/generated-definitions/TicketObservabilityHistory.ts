/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TicketObservabilityHistory = z.object({
  Action: z.string(),
  ExpiredAt: z.string(),
  ID: z.string(),
  Payload: z.record(z.any()),
  PodName: z.string(),
  TickID: z.number().int(),
  Timestamp: z.string(),
  party_id: z.string(),
  ticket_id: z.string()
})

export interface TicketObservabilityHistory extends z.TypeOf<typeof TicketObservabilityHistory> {}
