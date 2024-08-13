/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchTicket } from './MatchTicket.js'
import { Team } from './Team.js'

export const Match = z.object({
  Backfill: z.boolean().nullish(),
  ClientVersion: z.string().nullish(),
  MatchAttributes: z.record(z.any()).nullish(),
  PivotID: z.string().nullish(),
  RegionPreference: z.array(z.string()).nullish(),
  ServerName: z.string().nullish(),
  Teams: z.array(Team).nullish(),
  Tickets: z.array(MatchTicket).nullish(),
  Timestamp: z.string().nullish()
})

export interface Match extends z.TypeOf<typeof Match> {}
