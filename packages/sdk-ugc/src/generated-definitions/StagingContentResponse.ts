/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ScreenshotResponse } from './ScreenshotResponse.js'

export const StagingContentResponse = z.object({
  channelId: z.string(),
  createdTime: z.string(),
  customAttributes: z.record(z.any()).nullish(),
  fileExtension: z.string().nullish(),
  id: z.string(),
  name: z.string(),
  namespace: z.string(),
  note: z.string().nullish(),
  payloadURL: z.string().nullish(),
  screenshots: z.array(ScreenshotResponse).nullish(),
  status: z.enum(['APPROVED', 'PENDING', 'REJECTED']),
  subType: z.string().nullish(),
  tags: z.array(z.string()),
  type: z.string().nullish(),
  updatedTime: z.string().nullish(),
  userId: z.string()
})

export interface StagingContentResponse extends z.TypeOf<typeof StagingContentResponse> {}
