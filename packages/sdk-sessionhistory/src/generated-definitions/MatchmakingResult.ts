/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchingAlly } from './MatchingAlly.js'

export const MatchmakingResult = z.object({
  channel: z.string().nullish(),
  client_version: z.string().nullish(),
  deployment: z.string().nullish(),
  error_code: z.number().int().nullish(),
  error_message: z.string().nullish(),
  game_mode: z.string().nullish(),
  joinable: z.boolean().nullish(),
  match_id: z.string(),
  match_session_id: z.string().nullish(),
  matching_allies: z.array(MatchingAlly),
  namespace: z.string().nullish(),
  party_attributes: z.record(z.any()).nullish(),
  party_id: z.string().nullish(),
  queued_at: z.number().int(),
  region: z.string().nullish(),
  server_name: z.string().nullish(),
  status: z.string().nullish(),
  ticket_id: z.string(),
  updated_at: z.string()
})

export interface MatchmakingResult extends z.TypeOf<typeof MatchmakingResult> {}
