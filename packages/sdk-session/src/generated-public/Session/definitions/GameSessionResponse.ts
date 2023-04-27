/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DsInformationResponse } from './DsInformationResponse.js'
import { PublicConfiguration } from './PublicConfiguration.js'
import { Team } from './Team.js'
import { UserResponse } from './UserResponse.js'

export const GameSessionResponse = z.object({
  DSInformation: DsInformationResponse,
  attributes: z.record(z.any()).nullish(),
  backfillTicketID: z.string(),
  configuration: PublicConfiguration,
  createdAt: z.string(),
  createdBy: z.string(),
  expiredAt: z.string().nullish(),
  id: z.string(),
  isActive: z.boolean(),
  isFull: z.boolean(),
  leaderID: z.string(),
  matchPool: z.string(),
  members: z.array(UserResponse),
  namespace: z.string(),
  teams: z.array(Team).nullish(),
  ticketIDs: z.array(z.string()).nullish(),
  updatedAt: z.string(),
  version: z.number().int()
})

export interface GameSessionResponse extends z.TypeOf<typeof GameSessionResponse> {}
