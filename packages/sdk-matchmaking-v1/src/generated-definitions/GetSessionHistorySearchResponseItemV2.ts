/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetSessionHistorySearchResponseItemV2 = z.object({
  _id: z.string(),
  created_at: z.string(),
  game_mode: z.string(),
  joinable: z.boolean(),
  match_id: z.string(),
  namespace: z.string(),
  status: z.string(),
  sub_game_mode: z.array(z.string())
})

export interface GetSessionHistorySearchResponseItemV2 extends z.TypeOf<typeof GetSessionHistorySearchResponseItemV2> {}
