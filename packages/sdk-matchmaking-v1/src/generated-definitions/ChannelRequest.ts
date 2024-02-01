/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RuleSet } from './RuleSet.js'

export const ChannelRequest = z.object({
  blocked_player_option: z.enum(['blockedPlayerCanMatch', 'blockedPlayerCanMatchOnDifferentTeam', 'blockedPlayerCannotMatch']).nullish(),
  deployment: z.string(),
  description: z.string(),
  find_match_timeout_seconds: z.number().int(),
  game_mode: z.string(),
  joinable: z.boolean().nullish(),
  max_delay_ms: z.number().int(),
  region_expansion_range_ms: z.number().int().nullish(),
  region_expansion_rate_ms: z.number().int().nullish(),
  region_latency_initial_range_ms: z.number().int().nullish(),
  region_latency_max_ms: z.number().int().nullish(),
  rule_set: RuleSet,
  session_queue_timeout_seconds: z.number().int(),
  social_matchmaking: z.boolean().nullish(),
  sub_gamemode_selection: z.enum(['random', 'ticketOrder']).nullish(),
  ticket_observability_enable: z.boolean().nullish(),
  use_sub_gamemode: z.boolean().nullish()
})

export interface ChannelRequest extends z.TypeOf<typeof ChannelRequest> {}
