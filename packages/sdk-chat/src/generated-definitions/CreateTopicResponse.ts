/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTopicResponse = z.object({
  createdAt: z.number().int(),
  createdBy: z.string(),
  description: z.string(),
  isChannel: z.boolean(),
  isJoinable: z.boolean(),
  name: z.string(),
  namespace: z.string(),
  topicId: z.string(),
  type: z.string()
})

export interface CreateTopicResponse extends z.TypeOf<typeof CreateTopicResponse> {}
