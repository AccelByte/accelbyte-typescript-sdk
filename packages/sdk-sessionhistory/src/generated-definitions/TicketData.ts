/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AllianceRule } from './AllianceRule.js'
import { MatchingRule } from './MatchingRule.js'
import { MatchmakingResult } from './MatchmakingResult.js'

export const TicketData = z.object({
  action: z.string(),
  activeAllianceRule: AllianceRule.nullish(),
  activeMatchingRule: z.array(MatchingRule).nullish(),
  elapsedTime: z.number().nullish(),
  function: z.string().nullish(),
  gameMode: z.string(),
  isBackfillMatch: z.boolean(),
  isPivot: z.boolean(),
  isRuleSetFlexed: z.boolean(),
  iteration: z.number().int().nullish(),
  matchID: z.string().nullish(),
  matchedRegion: z.string(),
  memberAttributes: z.record(z.any()),
  namespace: z.string(),
  partyID: z.string(),
  podName: z.string(),
  remainingPlayersPerTicket: z.array(z.number().int()).nullish(),
  remainingTickets: z.number().int().nullish(),
  session: MatchmakingResult.nullish(),
  sessionTickID: z.string(),
  tickID: z.number().int(),
  timeToMatchSec: z.number().nullish(),
  timestamp: z.string(),
  totalPlayers: z.number().int(),
  unbackfillReason: z.string().nullish(),
  unmatchReason: z.string().nullish()
})

export interface TicketData extends z.TypeOf<typeof TicketData> {}
