/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchingAlly } from './MatchingAlly.js'
import { SessionPlayerHistory } from './SessionPlayerHistory.js'
import { SessionPlayerJoining } from './SessionPlayerJoining.js'

export const GetSessionHistoryDetailedResponseItem = z.object({
  _id: z.string(),
  channel: z.string(),
  client_version: z.string(),
  created_at: z.string(),
  event_description: z.string(),
  event_name: z.string(),
  game_mode: z.string(),
  joinable: z.boolean(),
  joining: z.array(SessionPlayerJoining),
  match_id: z.string(),
  matching_allies: z.array(MatchingAlly),
  namespace: z.string(),
  party_id: z.string().nullish(),
  players: z.array(SessionPlayerHistory),
  region: z.string(),
  removed_reason: z.string(),
  server_name: z.string(),
  session_type: z.string(),
  status: z.string(),
  user_id: z.string()
})

export interface GetSessionHistoryDetailedResponseItem extends z.TypeOf<typeof GetSessionHistoryDetailedResponseItem> {}
