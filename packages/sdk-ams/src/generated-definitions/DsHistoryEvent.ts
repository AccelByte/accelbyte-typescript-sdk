/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Time } from './Time.js'

export const DsHistoryEvent = z.object({
  createdAt: Time,
  exitCode: z.number().int(),
  ipAddress: z.string(),
  reason: z.string(),
  region: z.string(),
  serverId: z.string(),
  sessionId: z.string(),
  status: z.string()
})

export interface DsHistoryEvent extends z.TypeOf<typeof DsHistoryEvent> {}
