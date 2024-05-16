/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TicketEndpointAction } from './TicketEndpointAction.js'

export const LoginQueueTicketResponse = z.object({
  cancel: TicketEndpointAction,
  estimatedWaitingTimeInSeconds: z.number().int(),
  playerPollingTimeInSeconds: z.number().int(),
  position: z.number().int(),
  reconnectExpiredAt: z.number().int(),
  refresh: TicketEndpointAction,
  ticket: z.string()
})

export interface LoginQueueTicketResponse extends z.TypeOf<typeof LoginQueueTicketResponse> {}
