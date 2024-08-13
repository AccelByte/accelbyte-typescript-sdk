/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XRayTicketResult = z.object({
  elapsedTime: z.number(),
  id: z.string(),
  isBackfill: z.boolean().nullish(),
  isPivot: z.boolean().nullish(),
  matchpool: z.string(),
  memberAttributes: z.record(z.any()).nullish(),
  podName: z.string(),
  reason: z.string(),
  region: z.string(),
  tickId: z.string(),
  ticketId: z.string(),
  ticketStatus: z.string(),
  timestamp: z.string(),
  totalPlayers: z.number().int().nullish()
})

export interface XRayTicketResult extends z.TypeOf<typeof XRayTicketResult> {}
