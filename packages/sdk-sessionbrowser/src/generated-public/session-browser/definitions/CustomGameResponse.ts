/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameSessionSetting } from './GameSessionSetting'
import { Server } from './Server'

export const CustomGameResponse = z.object({
  all_players: z.array(z.string()),
  created_at: z.string(),
  game_session_setting: GameSessionSetting,
  joinable: z.boolean(),
  namespace: z.string(),
  players: z.array(z.string()),
  server: Server,
  session_id: z.string(),
  session_type: z.string(),
  spectators: z.array(z.string())
})

export interface CustomGameResponse extends z.TypeOf<typeof CustomGameResponse> {}
