/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchmakingHistory } from './MatchmakingHistory.js'

export const MatchmakingDetail = z.object({
  createdAt: z.string().nullish(),
  expiredAt: z.string().nullish(),
  gameSessionID: z.string().nullish(),
  histories: z.array(MatchmakingHistory).nullish(),
  matchPool: z.string().nullish(),
  matchRule: z.string().nullish(),
  namespace: z.string().nullish(),
  partySessionID: z.string().nullish(),
  ticketID: z.string().nullish()
})

export interface MatchmakingDetail extends z.TypeOf<typeof MatchmakingDetail> {}
