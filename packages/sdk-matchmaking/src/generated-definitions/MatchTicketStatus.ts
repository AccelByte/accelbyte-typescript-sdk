/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ProposedProposal } from './ProposedProposal.js'

export const MatchTicketStatus = z.object({
  matchFound: z.boolean(),
  matchPool: z.string().nullish(),
  matchTicketID: z.string().nullish(),
  proposedProposal: ProposedProposal.nullish(),
  sessionID: z.string()
})

export interface MatchTicketStatus extends z.TypeOf<typeof MatchTicketStatus> {}
