/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NotificationTopicResponse } from './NotificationTopicResponse'

export const TopicByNamespacesResponse = z.object({
  first: z.string(),
  last: z.string(),
  next: z.string(),
  previous: z.string(),
  topics: z.array(NotificationTopicResponse)
})

export interface TopicByNamespacesResponse extends z.TypeOf<typeof TopicByNamespacesResponse> {}
