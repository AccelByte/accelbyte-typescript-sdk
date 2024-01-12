/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ChatMessageResponse = z.object({
  from: z.string(),
  id: z.string(),
  message: z.string(),
  readAt: z.number().int(),
  receivedAt: z.number().int(),
  topicId: z.string()
})

export interface ChatMessageResponse extends z.TypeOf<typeof ChatMessageResponse> {}
