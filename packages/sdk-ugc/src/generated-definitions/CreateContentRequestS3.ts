/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PreviewMetadata } from './PreviewMetadata.js'

export const CreateContentRequestS3 = z.object({
  contentType: z.string().nullish(),
  customAttributes: z.record(z.any()).nullish(),
  fileExtension: z.string().nullish(),
  name: z.string(),
  preview: z.string(),
  previewMetadata: PreviewMetadata.nullish(),
  shareCode: z.string().nullish(),
  subType: z.string(),
  tags: z.array(z.string()),
  type: z.string()
})

export interface CreateContentRequestS3 extends z.TypeOf<typeof CreateContentRequestS3> {}
