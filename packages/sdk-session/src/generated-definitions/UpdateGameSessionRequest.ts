/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Team } from './Team.js'

export const UpdateGameSessionRequest = z.object({
  attributes: z.record(z.any()),
  backfillTicketID: z.string(),
  clientVersion: z.string(),
  deployment: z.string(),
  fallbackClaimKeys: z.array(z.string()).nullish(),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  matchPool: z.string(),
  maxPlayers: z.number().int(),
  minPlayers: z.number().int(),
  preferredClaimKeys: z.array(z.string()).nullish(),
  requestedRegions: z.array(z.string()),
  teams: z.array(Team),
  ticketIDs: z.array(z.string()),
  tieTeamsSessionLifetime: z.boolean().nullish(),
  type: z.string(),
  version: z.number().int()
})

export interface UpdateGameSessionRequest extends z.TypeOf<typeof UpdateGameSessionRequest> {}
