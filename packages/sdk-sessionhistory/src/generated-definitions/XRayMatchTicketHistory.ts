/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EventMatchHistory } from './EventMatchHistory.js'
import { Ticket } from './Ticket.js'

export const XRayMatchTicketHistory = z.object({
  action: z.string(),
  match: EventMatchHistory.nullish(),
  ticket: Ticket.nullish(),
  timestamp: z.string()
})

export interface XRayMatchTicketHistory extends z.TypeOf<typeof XRayMatchTicketHistory> {}
