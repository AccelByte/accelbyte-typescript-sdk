/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatInfo = z.object({
  createdAt: z.string(),
  cycleIds: z.array(z.string()).nullish(),
  defaultValue: z.number(),
  description: z.string().nullish(),
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
  updatedAt: z.string()
})

export interface StatInfo extends z.TypeOf<typeof StatInfo> {}
