/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeploymentConfigOverride } from './DeploymentConfigOverride.js'
import { PodCountConfigOverride } from './PodCountConfigOverride.js'

export const DeploymentWithOverride = z.object({
  allow_version_override: z.boolean(),
  buffer_count: z.number().int(),
  buffer_percent: z.number().int(),
  configuration: z.string(),
  createdAt: z.string(),
  enable_region_overrides: z.boolean(),
  extendable_session: z.boolean().nullish(),
  game_version: z.string(),
  max_count: z.number().int(),
  min_count: z.number().int(),
  modifiedBy: z.string(),
  name: z.string(),
  namespace: z.string(),
  overrides: z.record(DeploymentConfigOverride),
  region_overrides: z.record(PodCountConfigOverride),
  regions: z.array(z.string()),
  session_timeout: z.number().int().nullish(),
  unlimited: z.boolean(),
  updatedAt: z.string(),
  use_buffer_percent: z.boolean()
})

export interface DeploymentWithOverride extends z.TypeOf<typeof DeploymentWithOverride> {}
