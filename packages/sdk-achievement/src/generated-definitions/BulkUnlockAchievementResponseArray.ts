/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BulkUnlockAchievementResponse } from './BulkUnlockAchievementResponse.js'

export const BulkUnlockAchievementResponseArray = z.array(BulkUnlockAchievementResponse)

export interface BulkUnlockAchievementResponseArray extends z.TypeOf<typeof BulkUnlockAchievementResponseArray> {}
