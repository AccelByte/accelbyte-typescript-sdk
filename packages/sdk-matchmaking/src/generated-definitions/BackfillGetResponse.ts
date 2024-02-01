/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Match } from './Match.js'

export const BackfillGetResponse = z.object({
  createdAt: z.string().nullish(),
  matchPool: z.string().nullish(),
  matchSessionID: z.string().nullish(),
  partialMatch: Match.nullish(),
  ticketID: z.string().nullish()
})

export interface BackfillGetResponse extends z.TypeOf<typeof BackfillGetResponse> {}
