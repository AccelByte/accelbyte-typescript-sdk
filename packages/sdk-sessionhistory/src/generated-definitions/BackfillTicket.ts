/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Match } from './Match.js'

export const BackfillTicket = z.object({
  CreatedAt: z.string().nullish(),
  MatchPool: z.string().nullish(),
  MatchSessionID: z.string().nullish(),
  MatchSessionVersion: z.number().int().nullish(),
  PartialMatch: Match.nullish(),
  TicketID: z.string().nullish()
})

export interface BackfillTicket extends z.TypeOf<typeof BackfillTicket> {}
