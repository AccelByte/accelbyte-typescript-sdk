/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ModelscreateScreenshotRequest = z.object({
  contentType: z.string(),
  description: z.string(),
  fileExtension: z.enum(['pjp', 'jpg', 'jpeg', 'jfif', 'bmp', 'png'])
})

export interface ModelscreateScreenshotRequest extends z.TypeOf<typeof ModelscreateScreenshotRequest> {}
