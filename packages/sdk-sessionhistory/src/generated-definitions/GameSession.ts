/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DsInformation } from './DsInformation.js'
import { GameSessionTeam } from './GameSessionTeam.js'
import { SessionConfig } from './SessionConfig.js'
import { User } from './User.js'

export const GameSession = z.object({
  Attributes: z.record(z.any()).nullish(),
  BackfillTicketID: z.string().nullish(),
  Code: z.string().nullish(),
  Configuration: SessionConfig.nullish(),
  ConfigurationName: z.string().nullish(),
  CreatedAt: z.string().nullish(),
  CreatedBy: z.string().nullish(),
  DSInformation: DsInformation.nullish(),
  GameMode: z.string().nullish(),
  ID: z.string().nullish(),
  IsFull: z.boolean().nullish(),
  LeaderID: z.string().nullish(),
  MatchPool: z.string().nullish(),
  Members: z.array(User).nullish(),
  Namespace: z.string().nullish(),
  ProcessingTime: z.number().int().nullish(),
  Teams: z.array(GameSessionTeam).nullish(),
  TicketIDs: z.array(z.string()).nullish(),
  UpdatedAt: z.string().nullish(),
  Version: z.number().int().nullish(),
  isActive: z.boolean().nullish()
})

export interface GameSession extends z.TypeOf<typeof GameSession> {}
