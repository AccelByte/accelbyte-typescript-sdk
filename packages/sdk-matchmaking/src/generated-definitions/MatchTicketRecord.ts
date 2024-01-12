/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ProposedProposal } from './ProposedProposal.js'
import { Ticket } from './Ticket.js'

export const MatchTicketRecord = z.object({
  CreatedAt: z.string(),
  IsActive: z.boolean(),
  PartySessionID: z.string(),
  ProposedProposal,
  SessionID: z.string(),
  Ticket,
  TicketID: z.string(),
  UniqueTicketID: z.string()
})

export interface MatchTicketRecord extends z.TypeOf<typeof MatchTicketRecord> {}
