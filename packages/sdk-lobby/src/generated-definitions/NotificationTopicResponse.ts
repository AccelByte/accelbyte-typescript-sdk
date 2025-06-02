/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NotificationTopicResponse = z.object({
  createdAt: z.number().int(),
  description: z.string(),
  namespace: z.string(),
  topic: z.string()
})

export interface NotificationTopicResponse extends z.TypeOf<typeof NotificationTopicResponse> {}
