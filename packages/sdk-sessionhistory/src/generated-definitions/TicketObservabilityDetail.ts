/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Ticket } from './Ticket.js'
import { TicketObservability } from './TicketObservability.js'
import { TicketObservabilityHistory } from './TicketObservabilityHistory.js'

export const TicketObservabilityDetail = z.object({
  action: z.string(),
  createdAt: z.string(),
  expiredAt: z.string(),
  game_mode: z.string(),
  history: z.array(TicketObservabilityHistory).nullish(),
  lastData: TicketObservability.nullish(),
  matchId: z.string(),
  namespace: z.string(),
  party_id: z.string(),
  regions: z.string(),
  remainingPlayersPerTicket: z.array(z.number().int()).nullish(),
  remainingTickets: z.number().int(),
  requestedRegion: z.array(z.string()).nullish(),
  ticket: Ticket.nullish(),
  ticket_id: z.string(),
  timeToMatchSec: z.number().nullish(),
  updatedAt: z.string(),
  userIDs: z.array(z.string()).nullish()
})

export interface TicketObservabilityDetail extends z.TypeOf<typeof TicketObservabilityDetail> {}
