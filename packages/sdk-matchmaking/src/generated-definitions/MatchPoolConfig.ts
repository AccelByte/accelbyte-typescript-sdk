/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchFunctionOverride } from './MatchFunctionOverride.js'

export const MatchPoolConfig = z.object({
  auto_accept_backfill_proposal: z.boolean(),
  backfill_proposal_expiration_seconds: z.number().int(),
  backfill_ticket_expiration_seconds: z.number().int(),
  crossplay_disabled: z.boolean().nullish(),
  match_function: z.string(),
  match_function_override: MatchFunctionOverride,
  platform_group_enabled: z.boolean().nullish(),
  rule_set: z.string(),
  session_template: z.string(),
  ticket_expiration_seconds: z.number().int()
})

export interface MatchPoolConfig extends z.TypeOf<typeof MatchPoolConfig> {}
