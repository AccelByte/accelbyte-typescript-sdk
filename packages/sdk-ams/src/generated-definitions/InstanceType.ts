/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Capacity } from './Capacity.js'

export const InstanceType = z.object({
  capacity: z.array(Capacity),
  description: z.string(),
  id: z.string(),
  isBaremetal: z.boolean(),
  memoryGiB: z.number(),
  minSpeed: z.string(),
  name: z.string(),
  ownerAccountId: z.string(),
  provider: z.string(),
  virtualCpu: z.number().int()
})

export interface InstanceType extends z.TypeOf<typeof InstanceType> {}
