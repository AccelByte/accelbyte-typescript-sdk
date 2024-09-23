/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InstanceTypeDescriptionResponse = z.object({
  description: z.string(),
  id: z.string(),
  memoryGiB: z.number(),
  minSpeed: z.string(),
  name: z.string(),
  virtualCpu: z.number().int()
})

export interface InstanceTypeDescriptionResponse extends z.TypeOf<typeof InstanceTypeDescriptionResponse> {}
