/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { SelectionRule } from './SelectionRule.js'
import { SortTicket } from './SortTicket.js'
import { SortTicketRule } from './SortTicketRule.js'
import { SubGameMode } from './SubGameMode.js'

export const RuleSet = z.object({
  alliance: AllianceRule.nullish(),
  alliance_flexing_rule: z.array(AllianceFlexingRule).nullish(),
  batch_size: z.number().int(),
  bucket_mmr_rule: BucketMmrRule.nullish(),
  flexing_rule: z.array(FlexingRule).nullish(),
  match_options: MatchOptionRule.nullish(),
  matching_rule: z.array(MatchingRule).nullish(),
  rebalance_enable: z.boolean(),
  sort_ticket: SortTicket.nullish(),
  sort_tickets: z.array(SortTicketRule).nullish(),
  sub_game_modes: z.record(SubGameMode).nullish(),
  ticket_flexing_selection: z.string(),
  ticket_flexing_selections: z.array(SelectionRule).nullish(),
  use_newest_ticket_for_flexing: z.boolean().nullish()
})

export interface RuleSet extends z.TypeOf<typeof RuleSet> {}
