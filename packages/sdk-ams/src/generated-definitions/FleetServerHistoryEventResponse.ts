/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Time } from './Time.js'

export const FleetServerHistoryEventResponse = z.object({
  createdAt: Time,
  exitCode: z.number().int(),
  fleetId: z.string(),
  newState: z.string(),
  oldState: z.string(),
  reason: z.string(),
  serverId: z.string()
})

export interface FleetServerHistoryEventResponse extends z.TypeOf<typeof FleetServerHistoryEventResponse> {}
