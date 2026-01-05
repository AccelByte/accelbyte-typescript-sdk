/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SubmitReportRequest = z.object({
  additionalInfo: z.record(z.any()).nullish(),
  category: z.enum(['CHAT', 'EXTENSION', 'UGC', 'USER']),
  comment: z.string().nullish(),
  extensionCategory: z.string().nullish(),
  objectId: z.string().nullish(),
  objectType: z.string().nullish(),
  reason: z.string(),
  userId: z.string()
})

export interface SubmitReportRequest extends z.TypeOf<typeof SubmitReportRequest> {}
