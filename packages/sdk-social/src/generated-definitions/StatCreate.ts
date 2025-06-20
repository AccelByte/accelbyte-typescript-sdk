/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CycleOverrideRequest } from './CycleOverrideRequest.js'

export const StatCreate = z.object({
  capCycleOverride: z.boolean().nullish(),
  cycleIds: z.array(z.string()).nullish(),
  cycleOverrides: z.array(CycleOverrideRequest).nullish(),
  defaultValue: z.number(),
  description: z.string().nullish(),
  globalAggregationMethod: z.enum(['LAST', 'MAX', 'MIN', 'TOTAL']).nullish(),
  ignoreAdditionalDataOnValueRejected: z.boolean().nullish(),
  incrementOnly: z.boolean().nullish(),
  isPublic: z.boolean().nullish(),
  maximum: z.number().nullish(),
  minimum: z.number().nullish(),
  name: z.string(),
  setAsGlobal: z.boolean().nullish(),
  setBy: z.enum(['CLIENT', 'SERVER']),
  statCode: z.string(),
  tags: z.array(z.string()).nullish(),
  visibility: z.enum(['SERVERONLY', 'SHOWALL']).nullish()
})

export interface StatCreate extends z.TypeOf<typeof StatCreate> {}
