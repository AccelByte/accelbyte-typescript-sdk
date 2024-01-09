/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { XboxAchievement } from './XboxAchievement.js'

export const XblAchievementUpdateRequest = z.object({
  achievements: z.array(XboxAchievement).nullish(),
  serviceConfigId: z.string().nullish(),
  titleId: z.string().nullish(),
  xboxUserId: z.string().nullish()
})

export interface XblAchievementUpdateRequest extends z.TypeOf<typeof XblAchievementUpdateRequest> {}
