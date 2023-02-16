/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Achievement } from './Achievement'

export const SteamAchievementUpdateRequest = z.object({ steamUserId: z.string().nullish(), achievements: z.array(Achievement).nullish() })

export interface SteamAchievementUpdateRequest extends z.TypeOf<typeof SteamAchievementUpdateRequest> {}
