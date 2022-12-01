/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AchievementInfo } from './AchievementInfo'

export const ADtoObjectForQueryingXboxUserAchievements = z.object({ achievements: z.array(AchievementInfo).nullish() })

export type ADtoObjectForQueryingXboxUserAchievements = z.TypeOf<typeof ADtoObjectForQueryingXboxUserAchievements>
