/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PreviewMetadata } from './PreviewMetadata'

export const AdminUpdateContentRequest = z.object({
  contentType: z.string(),
  customAttributes: z.record(z.any()).nullish(),
  fileExtension: z.string(),
  name: z.string(),
  payload: z.string(),
  preview: z.string(),
  previewMetadata: PreviewMetadata.nullish(),
  shareCode: z.string().nullish(),
  subType: z.string(),
  tags: z.array(z.string()),
  type: z.string(),
  updateContentFile: z.boolean()
})

export interface AdminUpdateContentRequest extends z.TypeOf<typeof AdminUpdateContentRequest> {}
