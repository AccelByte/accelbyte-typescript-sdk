/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RuleSet } from './RuleSet.js'

export const Channel = z.object({
  blocked_player_option: z.string(),
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
  ruleset: RuleSet.nullish(),
  session_queue_timeout_seconds: z.number().int(),
  slug: z.string(),
  social_matchmaking: z.boolean(),
  sub_gamemode_selection: z.string(),
  ticket_observability_enable: z.boolean().nullish(),
  updated_at: z.string(),
  use_sub_gamemode: z.boolean()
})

export interface Channel extends z.TypeOf<typeof Channel> {}
