/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PayloadUrl } from './PayloadUrl.js'
import { PreviewUrl } from './PreviewUrl.js'

export const CreateContentResponse = z.object({
  channelId: z.string(),
  contentStatus: z.enum(['PUBLISHED', 'UNDER_REVIEW']).nullish(),
  contentType: z.string().nullish(),
  createdTime: z.string(),
  creatorName: z.string(),
  customAttributes: z.record(z.any()).nullish(),
  fileExtension: z.string(),
  id: z.string(),
  isHidden: z.boolean(),
  isOfficial: z.boolean(),
  name: z.string(),
  namespace: z.string(),
  parentNamespace: z.string(),
  payloadURL: z.array(PayloadUrl).nullish(),
  preview: z.string(),
  previewURL: z.array(PreviewUrl).nullish(),
  shareCode: z.string(),
  subType: z.string(),
  tags: z.array(z.string()),
  type: z.string(),
  updatedTime: z.string(),
  userId: z.string()
})

export interface CreateContentResponse extends z.TypeOf<typeof CreateContentResponse> {}
