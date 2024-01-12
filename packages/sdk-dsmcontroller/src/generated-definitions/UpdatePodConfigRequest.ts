/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePodConfigRequest = z.object({
  cpu_limit: z.number().int(),
  mem_limit: z.number().int(),
  name: z.string(),
  params: z.string()
})

export interface UpdatePodConfigRequest extends z.TypeOf<typeof UpdatePodConfigRequest> {}
