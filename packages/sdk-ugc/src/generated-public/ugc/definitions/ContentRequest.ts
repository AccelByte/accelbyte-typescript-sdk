/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PreviewMetadata } from './PreviewMetadata.js'

export const ContentRequest = z.object({
  customAttributes: z.record(z.any()).nullish(),
  name: z.string(),
  preview: z.string(),
  previewMetadata: PreviewMetadata.nullish(),
  subType: z.string(),
  tags: z.array(z.string()),
  type: z.string()
})

export interface ContentRequest extends z.TypeOf<typeof ContentRequest> {}
