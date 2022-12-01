/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EventRegistry = z.object({
  EventID: z.number().int(),
  EventLevel: z.number().int(),
  EventType: z.number().int(),
  UX: z.number().int()
})

export type EventRegistry = z.TypeOf<typeof EventRegistry>
