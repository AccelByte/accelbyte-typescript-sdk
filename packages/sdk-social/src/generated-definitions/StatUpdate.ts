/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatUpdate = z.object({
  cycleIds: z.array(z.string()).nullish(),
  defaultValue: z.number().nullish(),
  description: z.string().nullish(),
  globalAggregationMethod: z.enum(['LAST', 'MAX', 'MIN', 'TOTAL']).nullish(),
  ignoreAdditionalDataOnValueRejected: z.boolean().nullish(),
  isPublic: z.boolean().nullish(),
  name: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  visibility: z.enum(['SERVERONLY', 'SHOWALL']).nullish()
})

export interface StatUpdate extends z.TypeOf<typeof StatUpdate> {}
