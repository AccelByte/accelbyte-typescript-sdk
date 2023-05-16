/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatCreate = z.object({
  statCode: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  minimum: z.number().nullish(),
  maximum: z.number().nullish(),
  defaultValue: z.number(),
  incrementOnly: z.boolean().nullish(),
  setAsGlobal: z.boolean().nullish(),
  setBy: z.enum(['CLIENT', 'SERVER']),
  tags: z.array(z.string()).nullish(),
  cycleIds: z.array(z.string()).nullish(),
  isPublic: z.boolean().nullish()
})

export interface StatCreate extends z.TypeOf<typeof StatCreate> {}
