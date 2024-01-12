/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const WorkerConfig = z.object({
  AutoDeletion: z.boolean(),
  CreatedAt: z.string(),
  CreatedBy: z.string(),
  GhostWorker: z.boolean(),
  ManualBufferOverride: z.boolean(),
  ModifiedBy: z.string(),
  Namespace: z.string(),
  UpdatedAt: z.string(),
  ZombieWorker: z.boolean()
})

export interface WorkerConfig extends z.TypeOf<typeof WorkerConfig> {}
