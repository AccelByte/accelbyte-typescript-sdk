/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NotificationTopicResponseV1 = z.object({
  createdAt: z.number().int(),
  description: z.string(),
  namespace: z.string(),
  topicName: z.string()
})

export interface NotificationTopicResponseV1 extends z.TypeOf<typeof NotificationTopicResponseV1> {}
