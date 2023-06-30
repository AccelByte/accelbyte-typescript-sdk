/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UpdateRuleset } from './UpdateRuleset.js'

export const UpdateChannelRequest = z.object({
  deployment: z.string(),
  description: z.string(),
  findMatchTimeoutSeconds: z.number().int(),
  joinable: z.boolean(),
  max_delay_ms: z.number().int(),
  region_expansion_range_ms: z.number().int().nullish(),
  region_expansion_rate_ms: z.number().int().nullish(),
  region_latency_initial_range_ms: z.number().int().nullish(),
  region_latency_max_ms: z.number().int().nullish(),
  ruleSet: UpdateRuleset,
  sessionQueueTimeoutSeconds: z.number().int(),
  socialMatchmaking: z.boolean(),
  ticket_observability_enable: z.boolean().nullish(),
  use_sub_gamemode: z.boolean()
})

export interface UpdateChannelRequest extends z.TypeOf<typeof UpdateChannelRequest> {}
