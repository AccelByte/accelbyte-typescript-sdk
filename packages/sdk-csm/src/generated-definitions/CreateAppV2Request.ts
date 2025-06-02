/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AutoscalingRequest } from './AutoscalingRequest.js'
import { CpuRequest } from './CpuRequest.js'
import { MemoryRequest } from './MemoryRequest.js'
import { ReplicaRequest } from './ReplicaRequest.js'

export const CreateAppV2Request = z.object({
  autoscaling: AutoscalingRequest.nullish(),
  cpu: CpuRequest.nullish(),
  description: z.string().nullish(),
  memory: MemoryRequest.nullish(),
  replica: ReplicaRequest.nullish(),
  scenario: z.string(),
  vmSharingConfiguration: z.string().nullish()
})

export interface CreateAppV2Request extends z.TypeOf<typeof CreateAppV2Request> {}
