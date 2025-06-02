/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Server = z.object({
  alternate_ips: z.array(z.string()),
  custom_attribute: z.string(),
  deployment: z.string(),
  game_version: z.string(),
  image_version: z.string(),
  ip: z.string(),
  is_override_game_version: z.boolean(),
  last_update: z.string(),
  namespace: z.string(),
  pod_name: z.string(),
  port: z.number().int(),
  ports: z.record(z.number().int()),
  protocol: z.string(),
  provider: z.string(),
  region: z.string(),
  session_id: z.string(),
  status: z.string()
})

export interface Server extends z.TypeOf<typeof Server> {}
