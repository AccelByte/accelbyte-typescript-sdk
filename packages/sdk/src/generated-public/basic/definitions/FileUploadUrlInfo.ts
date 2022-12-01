/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FileUploadUrlInfo = z.object({
  url: z.string().nullish(),
  accessUrl: z.string().nullish(),
  method: z.string().nullish(),
  contentType: z.string().nullish()
})

export type FileUploadUrlInfo = z.TypeOf<typeof FileUploadUrlInfo>
