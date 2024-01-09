/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchmakerProposedProposal } from './MatchmakerProposedProposal.js'
import { MatchmakerTicket } from './MatchmakerTicket.js'

export const MatchTicketRecord = z.object({
  CreatedAt: z.string(),
  IsActive: z.boolean(),
  PartySessionID: z.string(),
  ProposedProposal: MatchmakerProposedProposal,
  SessionID: z.string(),
  Ticket: MatchmakerTicket,
  TicketID: z.string(),
  UniqueTicketID: z.string()
})

export interface MatchTicketRecord extends z.TypeOf<typeof MatchTicketRecord> {}
