/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameSessionSetting } from './GameSessionSetting'

export const CreateSessionRequest = z.object({
  game_session_setting: GameSessionSetting,
  game_version: z.string(),
  namespace: z.string(),
  session_type: z.string(),
  username: z.string()
})

export interface CreateSessionRequest extends z.TypeOf<typeof CreateSessionRequest> {}
