/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatInfo = z.object({
  statCode: z.string(),
  namespace: z.string(),
  status: z.enum(['INIT', 'TIED']),
  name: z.string(),
  description: z.string().nullish(),
  minimum: z.number().nullish(),
  maximum: z.number().nullish(),
  defaultValue: z.number(),
  incrementOnly: z.boolean(),
  setAsGlobal: z.boolean(),
  setBy: z.enum(['CLIENT', 'SERVER']),
  tags: z.array(z.string()).nullish(),
  cycleIds: z.array(z.string()).nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export interface StatInfo extends z.TypeOf<typeof StatInfo> {}
