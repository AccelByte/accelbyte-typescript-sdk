/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateDeploymentOverrideRequest = z.object({
  buffer_count: z.number().int(),
  buffer_percent: z.number().int(),
  configuration: z.string(),
  enable_region_overrides: z.boolean(),
  game_version: z.string(),
  max_count: z.number().int(),
  min_count: z.number().int(),
  regions: z.array(z.string()),
  session_timeout: z.number().int(),
  unlimited: z.boolean(),
  use_buffer_percent: z.boolean()
})

export interface UpdateDeploymentOverrideRequest extends z.TypeOf<typeof UpdateDeploymentOverrideRequest> {}
