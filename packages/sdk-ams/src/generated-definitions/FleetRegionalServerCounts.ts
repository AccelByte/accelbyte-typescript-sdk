/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FleetRegionalServerCounts = z.object({
  claimedServerCount: z.number().int(),
  readyServerCount: z.number().int(),
  region: z.string(),
  runningVmCount: z.number().int(),
  targetDsCount: z.number().int(),
  targetVmCount: z.number().int()
})

export interface FleetRegionalServerCounts extends z.TypeOf<typeof FleetRegionalServerCounts> {}
