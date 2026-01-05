/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SessionStorageRequest } from './SessionStorageRequest.js'
import { Team } from './Team.js'

export const CreateGameSessionRequest = z.object({
  appName: z.string().nullish(),
  attributes: z.record(z.any()),
  autoJoin: z.boolean().nullish(),
  backfillTicketID: z.string(),
  clientVersion: z.string(),
  configurationName: z.string(),
  customURLGRPC: z.string().nullish(),
  deployment: z.string(),
  dsSource: z.string().nullish(),
  fallbackClaimKeys: z.array(z.string()).nullish(),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  matchPool: z.string(),
  maxPlayers: z.number().int(),
  minPlayers: z.number().int(),
  preferredClaimKeys: z.array(z.string()).nullish(),
  requestedRegions: z.array(z.string()),
  serverName: z.string(),
  storage: SessionStorageRequest.nullish(),
  teams: z.array(Team),
  textChat: z.boolean(),
  textChatMode: z.enum(['GAME', 'NONE', 'TEAM']).nullish(),
  ticketIDs: z.array(z.string()),
  tieTeamsSessionLifetime: z.boolean().nullish(),
  type: z.string()
})

export interface CreateGameSessionRequest extends z.TypeOf<typeof CreateGameSessionRequest> {}
