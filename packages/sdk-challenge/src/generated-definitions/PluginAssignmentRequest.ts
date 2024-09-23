/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PluginAssignmentRequest = z.object({
  appName: z.string().nullish(),
  extendType: z.enum(['APP', 'CUSTOM']),
  grpcServerAddress: z.string().nullish()
})

export interface PluginAssignmentRequest extends z.TypeOf<typeof PluginAssignmentRequest> {}
