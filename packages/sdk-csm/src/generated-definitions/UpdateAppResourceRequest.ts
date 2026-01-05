/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AutoscalingRequest } from './AutoscalingRequest.js'
import { CpuRequest } from './CpuRequest.js'
import { MemoryRequest } from './MemoryRequest.js'
import { ReplicaRequest } from './ReplicaRequest.js'

export const UpdateAppResourceRequest = z.object({
  autoscaling: AutoscalingRequest,
  cpu: CpuRequest.nullish(),
  memory: MemoryRequest.nullish(),
  replica: ReplicaRequest.nullish(),
  vmSharingConfiguration: z.string().nullish()
})

export interface UpdateAppResourceRequest extends z.TypeOf<typeof UpdateAppResourceRequest> {}
