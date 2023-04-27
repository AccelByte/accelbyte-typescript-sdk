/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameSessionSetting } from './GameSessionSetting.js'
import { MatchMaking } from './MatchMaking.js'
import { Server } from './Server.js'

export const GameSession = z.object({
  all_players: z.array(z.string()),
  created_at: z.string(),
  game_session_setting: GameSessionSetting,
  game_version: z.string(),
  joinable: z.boolean(),
  match: MatchMaking,
  namespace: z.string(),
  players: z.array(z.string()),
  server: Server,
  session_id: z.string(),
  session_type: z.string(),
  spectators: z.array(z.string()),
  user_id: z.string(),
  username: z.string()
})

export interface GameSession extends z.TypeOf<typeof GameSession> {}
