/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FileUploadUrlInfo = z.object({
  accessUrl: z.string().nullish(),
  contentType: z.string().nullish(),
  method: z.string().nullish(),
  url: z.string().nullish()
})

export interface FileUploadUrlInfo extends z.TypeOf<typeof FileUploadUrlInfo> {}
