/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const WorkerConfigRequest = z.object({
  auto_deletion: z.boolean(),
  ghost_worker: z.boolean(),
  manual_buffer_override: z.boolean(),
  zombie_worker: z.boolean()
})

export interface WorkerConfigRequest extends z.TypeOf<typeof WorkerConfigRequest> {}
