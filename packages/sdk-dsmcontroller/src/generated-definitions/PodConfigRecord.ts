/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PodConfigRecord = z.object({
  cpu_limit: z.number().int(),
  createdAt: z.string(),
  mem_limit: z.number().int(),
  modifiedBy: z.string(),
  name: z.string(),
  namespace: z.string(),
  params: z.string(),
  updatedAt: z.string()
})

export interface PodConfigRecord extends z.TypeOf<typeof PodConfigRecord> {}
