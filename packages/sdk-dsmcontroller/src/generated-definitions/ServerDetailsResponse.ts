/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AllocationEvent } from './AllocationEvent.js'
import { StatusHistory } from './StatusHistory.js'

export const ServerDetailsResponse = z.object({
  allocation_events: z.array(AllocationEvent).nullish(),
  allocation_id: z.string(),
  alternate_ips: z.array(z.string()).nullish(),
  artifact_path: z.string().nullish(),
  cpu_limit: z.number().int(),
  created_at: z.string(),
  custom_attribute: z.string().nullish(),
  deployment: z.string(),
  deployment_override: z.string().nullish(),
  game_version: z.string(),
  image_version: z.string(),
  ip: z.string(),
  is_core_dump_enabled: z.boolean().nullish(),
  is_override_game_version: z.boolean(),
  is_override_region: z.boolean(),
  job_id: z.string(),
  last_update: z.string(),
  mem_limit: z.number().int(),
  namespace: z.string(),
  params: z.string(),
  pod_name: z.string(),
  port: z.number().int(),
  ports: z.record(z.number().int()).nullish(),
  protocol: z.string(),
  provider: z.string(),
  region: z.string(),
  session_id: z.string(),
  status: z.string(),
  status_history: z.array(StatusHistory).nullish(),
  termination_reason: z.string(),
  ulimit_file_size: z.number().int().nullish()
})

export interface ServerDetailsResponse extends z.TypeOf<typeof ServerDetailsResponse> {}
