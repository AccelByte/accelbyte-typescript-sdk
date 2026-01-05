/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UploadBinaryRecordResponse = z.object({
  content_type: z.string(),
  file_location: z.string(),
  url: z.string(),
  version: z.number().int()
})

export interface UploadBinaryRecordResponse extends z.TypeOf<typeof UploadBinaryRecordResponse> {}
