/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ChatSnapshotMessage } from './ChatSnapshotMessage.js'

export const ChatSnapshots = z.object({
  chatId: z.string(),
  createdAt: z.number().int(),
  joinedTopics: z.array(z.string()),
  messages: z.array(ChatSnapshotMessage),
  namespace: z.string(),
  senderId: z.string(),
  ticketId: z.string(),
  topicId: z.string()
})

export interface ChatSnapshots extends z.TypeOf<typeof ChatSnapshots> {}
