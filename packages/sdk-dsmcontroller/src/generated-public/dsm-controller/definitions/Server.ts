/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AllocationEvent } from './AllocationEvent.js'
import { StatusHistory } from './StatusHistory.js'

export const Server = z.object({
  allocation_events: z.array(AllocationEvent),
  allocation_id: z.string(),
  alternate_ips: z.array(z.string()),
  cpu_limit: z.number().int(),
  created_at: z.string(),
  custom_attribute: z.string(),
  deployment: z.string(),
  deployment_override: z.string(),
  game_version: z.string(),
  image_version: z.string(),
  ip: z.string(),
  is_override_game_version: z.boolean(),
  job_id: z.string(),
  last_update: z.string(),
  mem_limit: z.number().int(),
  namespace: z.string(),
  params: z.string(),
  pod_name: z.string(),
  port: z.number().int(),
  ports: z.record(z.number().int()),
  protocol: z.string(),
  provider: z.string(),
  region: z.string(),
  session_id: z.string(),
  status: z.string(),
  status_history: z.array(StatusHistory),
  termination_reason: z.string()
})

export interface Server extends z.TypeOf<typeof Server> {}
