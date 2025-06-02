/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ErrorDetails } from './ErrorDetails.js'

export const BulkUnlockAchievementResponse = z.object({
  achievementCode: z.string(),
  errorDetail: ErrorDetails.nullish(),
  success: z.boolean()
})

export interface BulkUnlockAchievementResponse extends z.TypeOf<typeof BulkUnlockAchievementResponse> {}
