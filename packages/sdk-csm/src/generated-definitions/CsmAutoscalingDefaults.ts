/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CsmAutoscalingDefaults = z.object({
  cpuUtilizationDefaultPercent: z.number().int(),
  cpuUtilizationMaxPercent: z.number().int(),
  cpuUtilizationMinPercent: z.number().int()
})

export interface CsmAutoscalingDefaults extends z.TypeOf<typeof CsmAutoscalingDefaults> {}
