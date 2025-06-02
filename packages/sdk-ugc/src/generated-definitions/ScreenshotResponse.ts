/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ScreenshotResponse = z.object({
  contentType: z.string().nullish(),
  description: z.string(),
  fileExtension: z.string(),
  screenshotId: z.string(),
  source: z.string(),
  url: z.string()
})

export interface ScreenshotResponse extends z.TypeOf<typeof ScreenshotResponse> {}
