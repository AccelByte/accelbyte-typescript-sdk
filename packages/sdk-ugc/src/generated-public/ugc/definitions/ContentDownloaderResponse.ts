/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ContentDownloaderResponse = z.object({
  contentId: z.string(),
  createdTime: z.string(),
  downloadedBy: z.string(),
  namespace: z.string()
})

export interface ContentDownloaderResponse extends z.TypeOf<typeof ContentDownloaderResponse> {}
