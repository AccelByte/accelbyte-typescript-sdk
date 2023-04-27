/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchingAlly } from './MatchingAlly.js'

export const MatchMaking = z.object({
  channel: z.string(),
  client_version: z.string(),
  created_at: z.string(),
  deployment: z.string(),
  event: z.string(),
  game_mode: z.string(),
  joinable: z.boolean().nullish(),
  match_id: z.string(),
  matching_allies: z.array(MatchingAlly),
  namespace: z.string(),
  party_attributes: z.record(z.any()),
  party_id: z.string().nullish(),
  queued_at: z.number().int(),
  region: z.string(),
  server_name: z.string(),
  status: z.string(),
  sub_game_mode: z.array(z.string())
})

export interface MatchMaking extends z.TypeOf<typeof MatchMaking> {}
