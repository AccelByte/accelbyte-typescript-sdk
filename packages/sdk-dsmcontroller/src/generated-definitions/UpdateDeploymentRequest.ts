/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateDeploymentRequest = z.object({
  allow_version_override: z.boolean(),
  buffer_count: z.number().int(),
  buffer_percent: z.number().int(),
  configuration: z.string(),
  enable_region_overrides: z.boolean(),
  extendable_session: z.boolean().nullish(),
  game_version: z.string(),
  max_count: z.number().int(),
  min_count: z.number().int(),
  regions: z.array(z.string()),
  session_timeout: z.number().int(),
  unlimited: z.boolean(),
  use_buffer_percent: z.boolean()
})

export interface UpdateDeploymentRequest extends z.TypeOf<typeof UpdateDeploymentRequest> {}
