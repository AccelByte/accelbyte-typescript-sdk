/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GameServer = z.object({
  alternate_ips: z.array(z.string()).nullish(),
  custom_attribute: z.string().nullish(),
  deployment: z.string().nullish(),
  game_version: z.string().nullish(),
  image_version: z.string().nullish(),
  ip: z.string().nullish(),
  is_override_game_version: z.boolean().nullish(),
  last_update: z.string().nullish(),
  namespace: z.string().nullish(),
  pod_name: z.string().nullish(),
  port: z.number().int().nullish(),
  ports: z.record(z.number().int()).nullish(),
  protocol: z.string().nullish(),
  provider: z.string().nullish(),
  region: z.string().nullish(),
  session_id: z.string().nullish(),
  status: z.string().nullish()
})

export interface GameServer extends z.TypeOf<typeof GameServer> {}
