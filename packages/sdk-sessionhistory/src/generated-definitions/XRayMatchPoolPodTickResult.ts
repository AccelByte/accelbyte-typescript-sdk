/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XRayMatchPoolPodTickResult = z.object({
  podName: z.string(),
  tickId: z.string(),
  timestamp: z.string(),
  totalMatchBackfilled: z.number().int(),
  totalMatchCreated: z.number().int(),
  totalMatchToBackfill: z.number().int(),
  totalTicketBackfilled: z.number().int(),
  totalTicketForBackfill: z.number().int(),
  totalTicketForMatch: z.number().int(),
  totalTicketInQueue: z.number().int(),
  totalTicketMatched: z.number().int()
})

export interface XRayMatchPoolPodTickResult extends z.TypeOf<typeof XRayMatchPoolPodTickResult> {}
