/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetInboxMessagesResponseData = z.object({
  category: z.string().nullish(),
  createdAt: z.number().int(),
  expiredAt: z.number().int(),
  id: z.string(),
  message: z.record(z.any()).nullish(),
  scope: z.enum(['NAMESPACE', 'USER']),
  senderId: z.string(),
  status: z.enum(['DRAFT', 'SENT', 'UNSENT']),
  updatedAt: z.number().int(),
  userIds: z.array(z.string()).nullish()
})

export interface GetInboxMessagesResponseData extends z.TypeOf<typeof GetInboxMessagesResponseData> {}
