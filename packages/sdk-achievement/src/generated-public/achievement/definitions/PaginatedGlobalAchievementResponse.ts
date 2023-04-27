/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GlobalAchievementResponse } from './GlobalAchievementResponse.js'
import { Pagination } from './Pagination.js'

export const PaginatedGlobalAchievementResponse = z.object({ data: z.array(GlobalAchievementResponse), paging: Pagination })

export interface PaginatedGlobalAchievementResponse extends z.TypeOf<typeof PaginatedGlobalAchievementResponse> {}
