/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { XboxAchievementRequest } from './XboxAchievementRequest'

export const ADtoObjectForUpdateXboxAchievementCompletePercentageApi = z.object({
  achievements: z.array(XboxAchievementRequest).nullish(),
  serviceConfigId: z.string().nullish(),
  titleId: z.string().nullish(),
  xboxUserId: z.string().nullish()
})

export type ADtoObjectForUpdateXboxAchievementCompletePercentageApi = z.TypeOf<
  typeof ADtoObjectForUpdateXboxAchievementCompletePercentageApi
>
