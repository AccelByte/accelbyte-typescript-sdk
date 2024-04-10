/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AllianceFlexingRule } from './AllianceFlexingRule.js'
import { BucketMmrRule } from './BucketMmrRule.js'
import { FlexingRule } from './FlexingRule.js'
import { MatchOptionRule } from './MatchOptionRule.js'
import { MatchingRule } from './MatchingRule.js'
import { SelectionRule } from './SelectionRule.js'
import { SortTicket } from './SortTicket.js'
import { SortTicketRule } from './SortTicketRule.js'
import { UpdateAllianceRule } from './UpdateAllianceRule.js'
import { UpdateRulesetSubGameModes } from './UpdateRulesetSubGameModes.js'

export const UpdateRuleset = z.object({
  alliance: UpdateAllianceRule,
  alliance_flexing_rule: z.array(AllianceFlexingRule),
  batch_size: z.number().int(),
  bucket_mmr_rule: BucketMmrRule.nullish(),
  flexingRules: z.array(FlexingRule).nullish(),
  match_options: MatchOptionRule.nullish(),
  matchingRules: z.array(MatchingRule).nullish(),
  sort_ticket: SortTicket,
  sort_tickets: z.array(SortTicketRule),
  sub_game_modes: UpdateRulesetSubGameModes.nullish(),
  ticket_flexing_selection: z.string(),
  ticket_flexing_selections: z.array(SelectionRule),
  use_newest_ticket_for_flexing: z.boolean().nullish()
})

export interface UpdateRuleset extends z.TypeOf<typeof UpdateRuleset> {}
