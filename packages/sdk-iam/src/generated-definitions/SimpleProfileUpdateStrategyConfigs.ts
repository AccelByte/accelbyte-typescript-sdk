/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ProfileUpdateConfig } from './ProfileUpdateConfig.js'

export const SimpleProfileUpdateStrategyConfigs = z.object({
  config: ProfileUpdateConfig.nullish(),
  createdAt: z.string(),
  field: z.string(),
  type: z.string(),
  updatedAt: z.string()
})

export interface SimpleProfileUpdateStrategyConfigs extends z.TypeOf<typeof SimpleProfileUpdateStrategyConfigs> {}
