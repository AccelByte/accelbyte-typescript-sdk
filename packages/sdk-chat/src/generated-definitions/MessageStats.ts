/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MessageStats = z.object({
  id: z.string(),
  messageRead: z.number().int(),
  messageStored: z.number().int(),
  notificationSent: z.number().int()
})

export interface MessageStats extends z.TypeOf<typeof MessageStats> {}
