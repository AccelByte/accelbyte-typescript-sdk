/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SaveInboxMessageResponse = z.object({
  category: z.string().nullish(),
  expiredAt: z.number().int(),
  id: z.string(),
  message: z.record(z.any()).nullish(),
  scope: z.enum(['NAMESPACE', 'USER']),
  status: z.enum(['DRAFT', 'SENT', 'UNSENT']),
  userIDs: z.array(z.string()).nullish()
})

export interface SaveInboxMessageResponse extends z.TypeOf<typeof SaveInboxMessageResponse> {}
