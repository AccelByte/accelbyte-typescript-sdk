/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Match } from './Match.js'

export const EventMatchHistory = z.object({
  action: z.string(),
  match: Match.nullish(),
  matchID: z.string(),
  matchpool: z.string(),
  namespace: z.string(),
  podName: z.string(),
  ruleSet: z.string().nullish(),
  tickID: z.string().nullish(),
  timestamp: z.string()
})

export interface EventMatchHistory extends z.TypeOf<typeof EventMatchHistory> {}
