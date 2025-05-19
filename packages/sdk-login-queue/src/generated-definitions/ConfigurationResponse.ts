/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConfigurationResponse = z.object({
  enabled: z.boolean(),
  maxConcurrency: z.number().int(),
  maxLoginRate: z.number().int(),
  minActivationPeriodInSecond: z.number().int(),
  namespace: z.string(),
  playerPollingTimeInSecond: z.number().int(),
  playerReconnectGracePeriodInSecond: z.number().int(),
  queueReconnectGracePeriodInSecond: z.number().int(),
  safetyMarginPercentage: z.number().int()
})

export interface ConfigurationResponse extends z.TypeOf<typeof ConfigurationResponse> {}
