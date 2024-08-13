/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ContentDownloadResponseV2 } from './ContentDownloadResponseV2.js'
import { Error } from './Error.js'

export const CopyContentResponse = z.object({
  content: ContentDownloadResponseV2.nullish(),
  error: Error.nullish(),
  isSuccess: z.boolean(),
  sourceContentId: z.string()
})

export interface CopyContentResponse extends z.TypeOf<typeof CopyContentResponse> {}
