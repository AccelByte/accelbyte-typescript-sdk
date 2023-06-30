/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetSessionHistorySearchResponseItem = z.object({
  _id: z.string(),
  channel: z.string(),
  client_version: z.string(),
  created_at: z.string(),
  event_description: z.string(),
  event_name: z.string(),
  game_mode: z.string(),
  joinable: z.boolean(),
  match_id: z.string(),
  namespace: z.string(),
  party_id: z.string().nullish(),
  region: z.string(),
  server_name: z.string(),
  status: z.string(),
  sub_game_mode: z.array(z.string())
})

export interface GetSessionHistorySearchResponseItem extends z.TypeOf<typeof GetSessionHistorySearchResponseItem> {}
