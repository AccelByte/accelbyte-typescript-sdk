/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AllianceFlexingRule } from './AllianceFlexingRule.js'
import { AllianceRule } from './AllianceRule.js'
import { BucketMmrRule } from './BucketMmrRule.js'
import { FlexingRule } from './FlexingRule.js'
import { MatchOptionRule } from './MatchOptionRule.js'
import { MatchingRule } from './MatchingRule.js'
import { SubGameMode } from './SubGameMode.js'

export const RuleSet = z.object({
  alliance: AllianceRule,
  alliance_flexing_rule: z.array(AllianceFlexingRule).nullish(),
  bucket_mmr_rule: BucketMmrRule,
  flexing_rule: z.array(FlexingRule),
  match_options: MatchOptionRule,
  matching_rule: z.array(MatchingRule),
  rebalance_enable: z.boolean(),
  sub_game_modes: z.record(SubGameMode).nullish(),
  use_newest_ticket_for_flexing: z.boolean()
})

export interface RuleSet extends z.TypeOf<typeof RuleSet> {}
