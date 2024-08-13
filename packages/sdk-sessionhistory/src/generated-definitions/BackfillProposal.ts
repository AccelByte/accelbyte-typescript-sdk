/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Team } from './Team.js'
import { Ticket } from './Ticket.js'

export const BackfillProposal = z.object({
  AddedTickets: z.array(Ticket).nullish(),
  BackfillTicketID: z.string().nullish(),
  CreatedAt: z.string().nullish(),
  MatchPool: z.string().nullish(),
  MatchSessionID: z.string().nullish(),
  ProposalID: z.string().nullish(),
  ProposedTeams: z.array(Team).nullish()
})

export interface BackfillProposal extends z.TypeOf<typeof BackfillProposal> {}
