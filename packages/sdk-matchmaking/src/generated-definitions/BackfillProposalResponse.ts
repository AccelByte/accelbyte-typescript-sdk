/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Team } from './Team.js'
import { Ticket } from './Ticket.js'

export const BackfillProposalResponse = z.object({
  backfillTicketID: z.string().nullish(),
  createdAt: z.string().nullish(),
  matchPool: z.string().nullish(),
  matchSessionID: z.string().nullish(),
  proposalID: z.string().nullish(),
  proposedTeams: z.array(Team).nullish(),
  tickets: z.array(Ticket).nullish()
})

export interface BackfillProposalResponse extends z.TypeOf<typeof BackfillProposalResponse> {}
