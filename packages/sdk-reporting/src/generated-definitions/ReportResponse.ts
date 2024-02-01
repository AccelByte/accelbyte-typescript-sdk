/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ReportResponse = z.object({
  additionalInfo: z.record(z.any()),
  category: z.enum(['CHAT', 'EXTENSION', 'UGC', 'USER']),
  comment: z.string(),
  createdAt: z.string(),
  extensionCategory: z.string().nullish(),
  id: z.string(),
  namespace: z.string(),
  objectId: z.string(),
  objectType: z.string(),
  reason: z.string(),
  reporterId: z.string(),
  ticketId: z.string(),
  updatedAt: z.string(),
  userId: z.string()
})

export interface ReportResponse extends z.TypeOf<typeof ReportResponse> {}
