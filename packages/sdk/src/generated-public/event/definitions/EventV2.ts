/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EventV2 = z.object({
  clientId: z.string(),
  id: z.string(),
  name: z.string(),
  namespace: z.string(),
  payload: z.record(z.any()).nullish(),
  sessionId: z.string(),
  timestamp: z.string(),
  traceId: z.string(),
  userId: z.string(),
  version: z.number().int()
})

export type EventV2 = z.TypeOf<typeof EventV2>
