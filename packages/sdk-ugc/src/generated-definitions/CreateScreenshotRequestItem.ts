/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateScreenshotRequestItem = z.object({
  contentType: z.string(),
  description: z.string(),
  fileExtension: z.enum(['bmp', 'jfif', 'jpeg', 'jpg', 'pjp', 'png'])
})

export interface CreateScreenshotRequestItem extends z.TypeOf<typeof CreateScreenshotRequestItem> {}
