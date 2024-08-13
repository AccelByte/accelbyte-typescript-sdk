/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameSession } from './GameSession.js'

export const History = z.object({
  eventName: z.string(),
  payload: GameSession,
  requesterClientID: z.string().nullish(),
  requesterUserID: z.string().nullish(),
  timestamp: z.string()
})

export interface History extends z.TypeOf<typeof History> {}
