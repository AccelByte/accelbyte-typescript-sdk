/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { History } from './History.js'

export const GameSessionDetail = z.object({
  created_at: z.string(),
  histories: z.array(History),
  namespace: z.string(),
  sessionID: z.string(),
  session_template: z.string()
})

export interface GameSessionDetail extends z.TypeOf<typeof GameSessionDetail> {}
