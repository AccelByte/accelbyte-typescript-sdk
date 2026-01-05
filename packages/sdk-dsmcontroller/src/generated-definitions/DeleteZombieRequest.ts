/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeleteZombieRequest = z.object({
  JobCount: z.number().int(),
  Region: z.string(),
  TimeoutSecond: z.number().int(),
  ZombieCount: z.number().int()
})

export interface DeleteZombieRequest extends z.TypeOf<typeof DeleteZombieRequest> {}
