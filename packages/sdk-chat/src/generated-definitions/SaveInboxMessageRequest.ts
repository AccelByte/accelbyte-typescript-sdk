/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SaveInboxMessageRequest = z.object({
  category: z.string().nullish(),
  expiredAt: z.number().int(),
  message: z.record(z.any()),
  scope: z.enum(['NAMESPACE', 'USER']),
  status: z.enum(['DRAFT', 'SENT']),
  userIds: z.array(z.string())
})

export interface SaveInboxMessageRequest extends z.TypeOf<typeof SaveInboxMessageRequest> {}
