/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClawbackInfo = z.object({
  createdAt: z.string().nullish(),
  dryRun: z.boolean().nullish(),
  eventContent: z.record(z.any()).nullish(),
  eventId: z.string().nullish(),
  eventType: z.string().nullish(),
  externalOrderId: z.string().nullish(),
  feedbackContent: z.record(z.any()).nullish(),
  feedbackStatus: z.enum(['FAIL', 'INIT', 'SUCCESS']).nullish(),
  feedbackStatusReason: z.string().nullish(),
  id: z.string(),
  namespace: z.string(),
  platform: z.string().nullish(),
  processId: z.string().nullish(),
  status: z.enum(['FAIL', 'IGNORED', 'INIT', 'SUCCESS']).nullish(),
  statusReason: z.string().nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string().nullish()
})

export interface ClawbackInfo extends z.TypeOf<typeof ClawbackInfo> {}
