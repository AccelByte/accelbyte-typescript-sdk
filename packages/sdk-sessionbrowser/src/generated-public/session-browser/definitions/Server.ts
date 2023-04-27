/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { StatusHistory } from './StatusHistory.js'

export const Server = z.object({
  allocation_id: z.string(),
  alternate_ips: z.array(z.string()),
  cpu_limit: z.number().int(),
  cpu_request: z.string(),
  deployment: z.string(),
  game_version: z.string(),
  image_version: z.string(),
  ip: z.string(),
  is_override_game_version: z.boolean(),
  last_update: z.string(),
  mem_limit: z.number().int(),
  mem_request: z.string(),
  namespace: z.string(),
  params: z.string(),
  pod_name: z.string(),
  port: z.number().int(),
  ports: z.record(z.number().int()),
  provider: z.string(),
  region: z.string(),
  session_id: z.string(),
  status: z.string(),
  status_history: z.array(StatusHistory)
})

export interface Server extends z.TypeOf<typeof Server> {}
