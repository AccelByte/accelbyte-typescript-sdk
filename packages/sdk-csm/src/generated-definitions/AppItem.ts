/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AutoscalingResponse } from './AutoscalingResponse.js'
import { CpuResponse } from './CpuResponse.js'
import { MemoryResponse } from './MemoryResponse.js'
import { ReplicaResponse } from './ReplicaResponse.js'

export const AppItem = z.object({
  appId: z.string(),
  appName: z.string(),
  appRepoArn: z.string().nullish(),
  appRepoUrl: z.string().nullish(),
  appStatus: z.string(),
  autoscaling: AutoscalingResponse.nullish(),
  basePath: z.string().nullish(),
  cpu: CpuResponse.nullish(),
  createdAt: z.string(),
  deletedAt: z.string().nullish(),
  deploymentCreatedAt: z.string().nullish(),
  deploymentId: z.string().nullish(),
  deploymentImageTag: z.string().nullish(),
  description: z.string().nullish(),
  gameName: z.string(),
  isResourceApplied: z.boolean(),
  memory: MemoryResponse.nullish(),
  message: z.string().nullish(),
  replica: ReplicaResponse.nullish(),
  scenario: z.string(),
  servicePublicURL: z.string().nullish(),
  serviceURL: z.string().nullish(),
  updatedAt: z.string(),
  vmSharingConfiguration: z.string()
})

export interface AppItem extends z.TypeOf<typeof AppItem> {}
