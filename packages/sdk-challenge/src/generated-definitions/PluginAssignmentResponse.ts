/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PluginAsignmentAppConfig } from './PluginAsignmentAppConfig.js'
import { PluginAssignmentCustomConfig } from './PluginAssignmentCustomConfig.js'

export const PluginAssignmentResponse = z.object({
  appConfig: PluginAsignmentAppConfig.nullish(),
  customConfig: PluginAssignmentCustomConfig.nullish(),
  extendType: z.enum(['APP', 'CUSTOM'])
})

export interface PluginAssignmentResponse extends z.TypeOf<typeof PluginAssignmentResponse> {}
