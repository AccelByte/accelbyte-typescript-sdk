/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SubmitReportResponse = z.object({
  category: z.enum(['CHAT', 'EXTENSION', 'UGC', 'USER']),
  createdAt: z.string(),
  extensionCategory: z.string().nullish(),
  namespace: z.string(),
  objectId: z.string(),
  objectType: z.string(),
  status: z.enum(['AUTO_MODERATED', 'CLOSED', 'OPEN', 'UNKNOWN']),
  ticketId: z.string(),
  updatedAt: z.string(),
  userId: z.string()
})

export interface SubmitReportResponse extends z.TypeOf<typeof SubmitReportResponse> {}
