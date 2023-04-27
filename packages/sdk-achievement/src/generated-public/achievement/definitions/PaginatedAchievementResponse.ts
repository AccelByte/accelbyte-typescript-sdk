/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AchievementResponse } from './AchievementResponse.js'
import { Pagination } from './Pagination.js'

export const PaginatedAchievementResponse = z.object({ data: z.array(AchievementResponse), paging: Pagination })

export interface PaginatedAchievementResponse extends z.TypeOf<typeof PaginatedAchievementResponse> {}
