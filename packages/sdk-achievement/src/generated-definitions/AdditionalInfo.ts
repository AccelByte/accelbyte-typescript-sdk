/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdditionalInfo = z.object({
  numberOfAchievements: z.number().int(),
  numberOfHiddenAchievements: z.number().int(),
  numberOfVisibleAchievements: z.number().int()
})

export interface AdditionalInfo extends z.TypeOf<typeof AdditionalInfo> {}
