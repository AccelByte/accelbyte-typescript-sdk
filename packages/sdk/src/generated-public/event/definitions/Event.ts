/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Event = z.object({
  AgentType: z.number().int(),
  ClientID: z.string(),
  ComponentID: z.number().int(),
  EventID: z.number().int(),
  EventLevel: z.number().int(),
  EventType: z.number().int(),
  IPAddress: z.string(),
  Namespace: z.string(),
  Realm: z.string(),
  TargetNamespace: z.string(),
  TargetUserID: z.string(),
  Time: z.string(),
  UX: z.number().int(),
  UserID: z.string()
})

export type Event = z.TypeOf<typeof Event>
