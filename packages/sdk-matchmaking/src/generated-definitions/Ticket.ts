/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayerData } from './PlayerData.js'
import { ProposedProposal } from './ProposedProposal.js'

export const Ticket = z.object({
  CreatedAt: z.string(),
  ExcludedSessions: z.array(z.string()),
  IsActive: z.boolean(),
  IsPivot: z.boolean(),
  IsSinglePlay: z.boolean(),
  Latencies: z.record(z.number().int()),
  MatchPool: z.string(),
  MatchedAt: z.string(),
  Namespace: z.string(),
  PartySessionID: z.string(),
  Players: z.array(PlayerData),
  ProposedProposal: ProposedProposal,
  TicketAttributes: z.record(z.any()),
  TicketID: z.string(),
  TicketInformation: z.record(z.any())
})

export interface Ticket extends z.TypeOf<typeof Ticket> {}
