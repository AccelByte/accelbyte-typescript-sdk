/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AllianceFlexingRule } from './AllianceFlexingRule.js'
import { AllianceRuleV1 } from './AllianceRuleV1.js'
import { BucketMmrRule } from './BucketMmrRule.js'
import { FlexingRule } from './FlexingRule.js'
import { MatchOptionRule } from './MatchOptionRule.js'
import { MatchingRule } from './MatchingRule.js'
import { SubGameMode } from './SubGameMode.js'

export const RuleSetV1 = z.object({
  alliance: AllianceRuleV1,
  alliance_flexing_rule: z.array(AllianceFlexingRule),
  bucket_mmr_rule: BucketMmrRule,
  flexingRules: z.array(FlexingRule),
  match_options: MatchOptionRule,
  matchingRules: z.array(MatchingRule),
  sub_game_modes: z.record(SubGameMode),
  use_newest_ticket_for_flexing: z.boolean()
})

export interface RuleSetV1 extends z.TypeOf<typeof RuleSetV1> {}
