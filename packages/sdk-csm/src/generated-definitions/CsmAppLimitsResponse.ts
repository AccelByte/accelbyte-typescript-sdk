/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CsmAutoscalingDefaults } from './CsmAutoscalingDefaults.js'

export const CsmAppLimitsResponse = z.object({
  autoscaling: CsmAutoscalingDefaults,
  extendAppCPULimit: z.number().int(),
  extendAppEventHandlerCPULimit: z.number().int(),
  extendAppMemoryLimit: z.number().int(),
  extendAppReplicaLimit: z.number().int(),
  extendAppeEventHandlerMemoryLimit: z.number().int(),
  maxSubscriberCount: z.number().int()
})

export interface CsmAppLimitsResponse extends z.TypeOf<typeof CsmAppLimitsResponse> {}
