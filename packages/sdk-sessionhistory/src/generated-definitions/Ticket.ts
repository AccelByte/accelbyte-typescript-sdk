/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayerData } from './PlayerData.js'
import { ProposedProposal } from './ProposedProposal.js'

export const Ticket = z.object({
  CreatedAt: z.string().nullish(),
  Latencies: z.record(z.number().int()).nullish(),
  MatchPool: z.string().nullish(),
  Namespace: z.string().nullish(),
  PartySessionID: z.string().nullish(),
  Players: z.array(PlayerData).nullish(),
  ProposedProposal: ProposedProposal.nullish(),
  TicketAttributes: z.record(z.any()).nullish(),
  TicketID: z.string().nullish()
})

export interface Ticket extends z.TypeOf<typeof Ticket> {}
