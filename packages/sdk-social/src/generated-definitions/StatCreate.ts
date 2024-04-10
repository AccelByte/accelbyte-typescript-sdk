/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatCreate = z.object({
  cycleIds: z.array(z.string()).nullish(),
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
  tags: z.array(z.string()).nullish()
})

export interface StatCreate extends z.TypeOf<typeof StatCreate> {}
