/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PreviewMetadata } from './PreviewMetadata.js'

export const CreateContentRequest = z.object({
  customAttributes: z.record(z.any()).nullish(),
  name: z.string(),
  payload: z.string(),
  preview: z.string(),
  previewMetadata: PreviewMetadata.nullish(),
  subType: z.string(),
  tags: z.array(z.string()),
  type: z.string()
})

export interface CreateContentRequest extends z.TypeOf<typeof CreateContentRequest> {}
