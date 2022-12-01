/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GenericQueryPayload = z.object({
  clientId: z.string(),
  eventName: z.string(),
  payloadQuery: z.record(z.any()),
  sessionId: z.string(),
  traceId: z.string(),
  userId: z.string(),
  version: z.number().int()
})

export type GenericQueryPayload = z.TypeOf<typeof GenericQueryPayload>
