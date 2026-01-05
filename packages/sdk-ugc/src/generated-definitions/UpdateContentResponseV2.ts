/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PayloadUrl } from './PayloadUrl.js'

export const UpdateContentResponseV2 = z.object({
  channelId: z.string(),
  contentStatus: z.enum(['PUBLISHED', 'UNDER_REVIEW']),
  contentType: z.string().nullish(),
  createdTime: z.string(),
  customAttributes: z.record(z.any()).nullish(),
  fileExtension: z.string().nullish(),
  fileLocation: z.string(),
  id: z.string(),
  isHidden: z.boolean(),
  isOfficial: z.boolean(),
  name: z.string(),
  namespace: z.string(),
  parentNamespace: z.string(),
  payloadURL: z.array(PayloadUrl).nullish(),
  shareCode: z.string(),
  subType: z.string().nullish(),
  tags: z.array(z.string()),
  type: z.string().nullish(),
  updatedTime: z.string().nullish(),
  userId: z.string()
})

export interface UpdateContentResponseV2 extends z.TypeOf<typeof UpdateContentResponseV2> {}
