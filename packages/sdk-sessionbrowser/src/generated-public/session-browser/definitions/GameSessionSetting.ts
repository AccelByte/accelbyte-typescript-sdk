/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GameSessionSetting = z.object({
  allow_join_in_progress: z.boolean(),
  current_internal_player: z.number().int(),
  current_player: z.number().int(),
  map_name: z.string(),
  max_internal_player: z.number().int(),
  max_player: z.number().int(),
  mode: z.string(),
  num_bot: z.number().int(),
  password: z.string(),
  settings: z.record(z.any())
})

export interface GameSessionSetting extends z.TypeOf<typeof GameSessionSetting> {}
