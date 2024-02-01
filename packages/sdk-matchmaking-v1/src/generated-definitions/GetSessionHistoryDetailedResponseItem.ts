/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchingAlly } from './MatchingAlly.js'

export const GetSessionHistoryDetailedResponseItem = z.object({
  _id: z.string(),
  channel: z.string(),
  client_version: z.string(),
  created_at: z.string(),
  event_description: z.string(),
  event_name: z.string(),
  game_mode: z.string(),
  joinable: z.boolean(),
  match_id: z.string(),
  matching_allies: z.array(MatchingAlly),
  namespace: z.string(),
  party_id: z.string().nullish(),
  region: z.string(),
  server_name: z.string(),
  status: z.string()
})

export interface GetSessionHistoryDetailedResponseItem extends z.TypeOf<typeof GetSessionHistoryDetailedResponseItem> {}
