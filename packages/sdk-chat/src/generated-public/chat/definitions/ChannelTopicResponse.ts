/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ChannelTopicResponse = z.object({
  createdAt: z.number().int(),
  createdBy: z.string(),
  description: z.string(),
  isJoinable: z.boolean(),
  messagePerMinutes: z.number(),
  name: z.string(),
  namespace: z.string(),
  shardLimit: z.number().int(),
  shardNumber: z.number().int(),
  topicId: z.string(),
  totalMember: z.number().int()
})

export interface ChannelTopicResponse extends z.TypeOf<typeof ChannelTopicResponse> {}
