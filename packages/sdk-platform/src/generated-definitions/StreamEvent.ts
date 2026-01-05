/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { StreamEventBody } from './StreamEventBody.js'

export const StreamEvent = z.object({
  body: StreamEventBody.nullish(),
  eventDomain: z.string().nullish(),
  eventSource: z.string().nullish(),
  eventType: z.string().nullish(),
  eventVersion: z.number().int().nullish(),
  id: z.string().nullish(),
  timestamp: z.string().nullish()
})

export interface StreamEvent extends z.TypeOf<typeof StreamEvent> {}
