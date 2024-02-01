/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TopicResponse = z.object({
  createdAt: z.number().int(),
  createdBy: z.string(),
  lastMessageAt: z.number().int(),
  name: z.string(),
  namespace: z.string(),
  topicId: z.string(),
  type: z.string()
})

export interface TopicResponse extends z.TypeOf<typeof TopicResponse> {}
