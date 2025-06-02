/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TicketResponse = z.object({
  category: z.enum(['CHAT', 'EXTENSION', 'UGC', 'USER']),
  createdAt: z.string(),
  extensionCategory: z.string().nullish(),
  id: z.string(),
  namespace: z.string(),
  notes: z.string(),
  objectId: z.string(),
  objectType: z.string(),
  reportsCount: z.number().int(),
  status: z.enum(['AUTO_MODERATED', 'CLOSED', 'OPEN', 'UNKNOWN']),
  updatedAt: z.string(),
  userId: z.string()
})

export interface TicketResponse extends z.TypeOf<typeof TicketResponse> {}
