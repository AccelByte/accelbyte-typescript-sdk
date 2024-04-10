/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameSessionSetting } from './GameSessionSetting.js'
import { Server } from './Server.js'

export const CustomGameResponse = z.object({
  all_players: z.array(z.string()).nullish(),
  created_at: z.string(),
  game_session_setting: GameSessionSetting.nullish(),
  joinable: z.boolean(),
  namespace: z.string(),
  players: z.array(z.string()).nullish(),
  server: Server.nullish(),
  session_id: z.string(),
  session_type: z.string(),
  spectators: z.array(z.string()).nullish()
})

export interface CustomGameResponse extends z.TypeOf<typeof CustomGameResponse> {}
