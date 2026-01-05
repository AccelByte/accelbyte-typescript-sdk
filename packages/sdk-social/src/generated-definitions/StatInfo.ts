/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CycleOverride } from './CycleOverride.js'

export const StatInfo = z.object({
  capCycleOverride: z.boolean().nullish(),
  createdAt: z.string(),
  cycleIds: z.array(z.string()).nullish(),
  cycleOverrides: z.array(CycleOverride).nullish(),
  defaultValue: z.number(),
  description: z.string().nullish(),
  globalAggregationMethod: z.enum(['LAST', 'MAX', 'MIN', 'TOTAL']).nullish(),
  ignoreAdditionalDataOnValueRejected: z.boolean(),
  incrementOnly: z.boolean(),
  isPublic: z.boolean(),
  maximum: z.number().nullish(),
  minimum: z.number().nullish(),
  name: z.string(),
  namespace: z.string(),
  setAsGlobal: z.boolean(),
  setBy: z.enum(['CLIENT', 'SERVER']),
  statCode: z.string(),
  status: z.enum(['INIT', 'TIED']),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string(),
  visibility: z.enum(['SERVERONLY', 'SHOWALL']).nullish()
})

export interface StatInfo extends z.TypeOf<typeof StatInfo> {}
