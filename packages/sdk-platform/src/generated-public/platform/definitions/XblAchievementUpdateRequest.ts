/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Achievement } from './Achievement.js'

export const XblAchievementUpdateRequest = z.object({
  achievements: z.array(Achievement).nullish(),
  serviceConfigId: z.string().nullish(),
  titleId: z.string().nullish(),
  xboxUserId: z.string().nullish()
})

export interface XblAchievementUpdateRequest extends z.TypeOf<typeof XblAchievementUpdateRequest> {}
