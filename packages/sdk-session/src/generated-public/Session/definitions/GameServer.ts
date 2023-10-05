/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PortConfigurationAms } from './PortConfigurationAms.js'

export const GameServer = z.object({
  alternate_ips: z.array(z.string()).nullish(),
  ams_protocol: z.array(PortConfigurationAms).nullish(),
  custom_attribute: z.string(),
  deployment: z.string().nullish(),
  game_version: z.string().nullish(),
  image_version: z.string(),
  ip: z.string(),
  is_override_game_version: z.boolean(),
  last_update: z.string(),
  namespace: z.string(),
  pod_name: z.string(),
  port: z.number().int().nullish(),
  ports: z.record(z.number().int()).nullish(),
  protocol: z.string().nullish(),
  provider: z.string().nullish(),
  region: z.string(),
  session_id: z.string(),
  source: z.string(),
  status: z.string()
})

export interface GameServer extends z.TypeOf<typeof GameServer> {}
