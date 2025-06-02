/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RepositoryRecord = z.object({
  createdAt: z.string(),
  modifiedBy: z.string(),
  namespace: z.string(),
  repository: z.string(),
  updatedAt: z.string()
})

export interface RepositoryRecord extends z.TypeOf<typeof RepositoryRecord> {}
