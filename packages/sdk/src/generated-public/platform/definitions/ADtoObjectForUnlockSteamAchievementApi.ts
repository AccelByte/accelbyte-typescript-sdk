/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SteamAchievementRequest } from './SteamAchievementRequest'

export const ADtoObjectForUnlockSteamAchievementApi = z.object({
  steamUserId: z.string().nullish(),
  achievements: z.array(SteamAchievementRequest).nullish()
})

export type ADtoObjectForUnlockSteamAchievementApi = z.TypeOf<typeof ADtoObjectForUnlockSteamAchievementApi>
