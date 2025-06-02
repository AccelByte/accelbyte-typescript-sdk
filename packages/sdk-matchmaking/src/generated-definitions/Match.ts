/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Team } from './Team.js'
import { Ticket } from './Ticket.js'

export const Match = z.object({
  backfill: z.boolean().nullish(),
  clientVersion: z.string().nullish(),
  matchAttributes: z.record(z.any()).nullish(),
  regionPreference: z.array(z.string()).nullish(),
  serverName: z.string().nullish(),
  teams: z.array(Team).nullish(),
  tickets: z.array(Ticket).nullish()
})

export interface Match extends z.TypeOf<typeof Match> {}
