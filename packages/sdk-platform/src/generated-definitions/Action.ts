/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Operation } from './Operation.js'

export const Action = z.object({
  operations: z.array(Operation).nullish(),
  status: z.enum(['FAILED', 'INIT', 'SKIPPED', 'SUCCESS']).nullish(),
  statusReason: z.string().nullish(),
  userId: z.string().nullish()
})

export interface Action extends z.TypeOf<typeof Action> {}
