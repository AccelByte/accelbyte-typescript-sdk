/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Configuration } from './Configuration.js'
import { DsInformation } from './DsInformation.js'
import { Team } from './Team.js'
import { User } from './User.js'

export const GameSession = z.object({
  DSInformation: DsInformation,
  GameMode: z.string(),
  JoinType: z.string(),
  Members: z.array(User),
  attributes: z.record(z.any()),
  backfillTicketID: z.string(),
  configuration: Configuration,
  createdAt: z.string(),
  id: z.string(),
  leaderID: z.string(),
  matchPool: z.string(),
  namespace: z.string(),
  teams: z.array(Team),
  updatedAt: z.string(),
  version: z.number().int()
})

export interface GameSession extends z.TypeOf<typeof GameSession> {}
