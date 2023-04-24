/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'
import { PublicAchievementResponse } from './PublicAchievementResponse'

export const PublicAchievementsResponse = z.object({ data: z.array(PublicAchievementResponse), paging: Pagination })

export interface PublicAchievementsResponse extends z.TypeOf<typeof PublicAchievementsResponse> {}
