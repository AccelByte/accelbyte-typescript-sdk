/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Link } from './Link.js'

export const RefreshTicketResponse = z.object({
  cancel: Link,
  estimatedWaitingTimeInSeconds: z.number().int(),
  namespace: z.string(),
  playerPollingTimeInSeconds: z.number().int(),
  position: z.number().int(),
  reconnectExpiredAt: z.number().int()
})

export interface RefreshTicketResponse extends z.TypeOf<typeof RefreshTicketResponse> {}
