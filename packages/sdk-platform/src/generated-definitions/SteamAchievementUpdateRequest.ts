/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SteamAchievement } from './SteamAchievement.js'

export const SteamAchievementUpdateRequest = z.object({
  achievements: z.array(SteamAchievement).nullish(),
  steamUserId: z.string().nullish()
})

export interface SteamAchievementUpdateRequest extends z.TypeOf<typeof SteamAchievementUpdateRequest> {}
