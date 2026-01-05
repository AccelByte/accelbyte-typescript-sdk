/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ImageStorage = z.object({
  currentMarkedForDeletionBytes: z.number().int(),
  currentUsageBytes: z.number().int(),
  quotaBytes: z.number().int()
})

export interface ImageStorage extends z.TypeOf<typeof ImageStorage> {}
