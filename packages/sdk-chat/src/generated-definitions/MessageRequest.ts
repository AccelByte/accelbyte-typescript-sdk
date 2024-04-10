/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MessageRequest = z.object({
  message: z.string(),
  timestamp: z.number().int().nullish(),
  topicId: z.string().nullish(),
  topicType: z.enum(['GROUP', 'PERSONAL']).nullish(),
  userId: z.string().nullish()
})

export interface MessageRequest extends z.TypeOf<typeof MessageRequest> {}
