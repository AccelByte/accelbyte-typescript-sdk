/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RuleSetV1 } from './RuleSetV1.js'

export const ChannelV1 = z.object({
  deployment: z.string(),
  description: z.string(),
  findMatchTimeoutSeconds: z.number().int(),
  gameMode: z.string(),
  joinable: z.boolean(),
  max_delay_ms: z.number().int(),
  namespace: z.string(),
  region_expansion_range_ms: z.number().int(),
  region_expansion_rate_ms: z.number().int(),
  region_latency_initial_range_ms: z.number().int(),
  region_latency_max_ms: z.number().int(),
  ruleSet: RuleSetV1,
  sessionQueueTimeoutSeconds: z.number().int(),
  slug: z.string(),
  socialMatchmaking: z.boolean(),
  updatedAt: z.string(),
  use_sub_gamemode: z.boolean()
})

export interface ChannelV1 extends z.TypeOf<typeof ChannelV1> {}
