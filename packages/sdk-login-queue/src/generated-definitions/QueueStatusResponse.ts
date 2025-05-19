/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const QueueStatusResponse = z.object({
  isActive: z.boolean(),
  loggedUserCount: z.number().int(),
  loginRPS: z.number().int(),
  namespace: z.string(),
  queueCount: z.number().int()
})

export interface QueueStatusResponse extends z.TypeOf<typeof QueueStatusResponse> {}
