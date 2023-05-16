/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RuleSet } from './RuleSet.js'

export const CreateChannelResponse = z.object({
  deployment: z.string(),
  description: z.string(),
  find_match_timeout_seconds: z.number().int(),
  game_mode: z.string(),
  joinable: z.boolean(),
  max_delay_ms: z.number().int(),
  namespace: z.string(),
  region_expansion_range_ms: z.number().int(),
  region_expansion_rate_ms: z.number().int(),
  region_latency_initial_range_ms: z.number().int(),
  region_latency_max_ms: z.number().int(),
  ruleset: RuleSet,
  session_queue_timeout_seconds: z.number().int(),
  slug: z.string(),
  social_matchmaking: z.boolean(),
  updated_at: z.string(),
  use_sub_gamemode: z.boolean()
})

export interface CreateChannelResponse extends z.TypeOf<typeof CreateChannelResponse> {}
