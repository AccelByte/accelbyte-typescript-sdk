/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AchievementInfo } from './AchievementInfo.js'

export const XblUserAchievements = z.object({ achievements: z.array(AchievementInfo).nullish() })

export interface XblUserAchievements extends z.TypeOf<typeof XblUserAchievements> {}
