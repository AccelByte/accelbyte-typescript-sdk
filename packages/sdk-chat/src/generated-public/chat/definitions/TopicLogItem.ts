/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TopicLogItem = z.object({
  createdAt: z.number().int(),
  id: z.string(),
  message: z.string(),
  senderId: z.string(),
  topicId: z.string(),
  type: z.enum(['TOPIC_CREATE', 'TOPIC_JOIN', 'TOPIC_LEAVE', 'TOPIC_DELETE']),
  userId: z.string()
})

export interface TopicLogItem extends z.TypeOf<typeof TopicLogItem> {}
