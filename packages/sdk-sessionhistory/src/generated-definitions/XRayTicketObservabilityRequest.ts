/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AllianceRule } from './AllianceRule.js'
import { MatchingRule } from './MatchingRule.js'

export const XRayTicketObservabilityRequest = z.object({
  action: z.string(),
  activeAllianceRule: AllianceRule.nullish(),
  activeMatchingRule: z.array(MatchingRule).nullish(),
  function: z.string().nullish(),
  gameMode: z.string(),
  isBackfillMatch: z.boolean(),
  isRuleSetFlexed: z.boolean(),
  iteration: z.number().int().nullish(),
  matchID: z.string().nullish(),
  namespace: z.string(),
  remainingPlayersPerTicket: z.array(z.number().int()).nullish(),
  remainingTickets: z.number().int().nullish(),
  sessionTickID: z.string(),
  tickID: z.number().int(),
  ticketID: z.string(),
  timeToMatchSec: z.number().nullish(),
  timestamp: z.string(),
  unbackfillReason: z.string().nullish(),
  unmatchReason: z.string().nullish()
})

export interface XRayTicketObservabilityRequest extends z.TypeOf<typeof XRayTicketObservabilityRequest> {}
