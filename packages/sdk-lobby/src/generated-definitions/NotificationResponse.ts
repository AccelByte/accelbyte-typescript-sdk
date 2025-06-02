/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NotificationResponse = z.object({
  from: z.string().nullish(),
  id: z.string().nullish(),
  lobbySessionID: z.string().nullish(),
  loginType: z.string().nullish(),
  payload: z.string().nullish(),
  reconnectFromCode: z.number().int().nullish(),
  sentAt: z.string().nullish(),
  sequenceID: z.number().int(),
  sequenceNumber: z.number().int(),
  to: z.string().nullish(),
  topic: z.string().nullish(),
  type: z.string()
})

export interface NotificationResponse extends z.TypeOf<typeof NotificationResponse> {}
