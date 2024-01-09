/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayerData } from './PlayerData.js'
import { ProposedProposal } from './ProposedProposal.js'

export const MatchmakerTicket = z.object({
  CreatedAt: z.string(),
  Latencies: z.record(z.number().int()),
  MatchPool: z.string(),
  Namespace: z.string(),
  PartySessionID: z.string(),
  Players: z.array(PlayerData),
  ProposedProposal,
  TicketAttributes: z.record(z.any()),
  TicketID: z.string()
})

export interface MatchmakerTicket extends z.TypeOf<typeof MatchmakerTicket> {}
