/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BackfillProposal } from './BackfillProposal.js'
import { BackfillTicket } from './BackfillTicket.js'
import { Ticket } from './Ticket.js'

export const MatchmakingHistory = z.object({
  backfillProposal: BackfillProposal.nullish(),
  backfillTicket: BackfillTicket.nullish(),
  eventName: z.string().nullish(),
  requestedUserID: z.string().nullish(),
  ticket: Ticket.nullish(),
  timestamp: z.string().nullish(),
  unbackfillReason: z.string().nullish()
})

export interface MatchmakingHistory extends z.TypeOf<typeof MatchmakingHistory> {}
