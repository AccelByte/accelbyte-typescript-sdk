/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GenerateContentUploadUrlResponse = z.object({
  contentType: z.string().nullish(),
  fileExtension: z.string().nullish(),
  fileLocation: z.string(),
  url: z.string()
})

export interface GenerateContentUploadUrlResponse extends z.TypeOf<typeof GenerateContentUploadUrlResponse> {}
