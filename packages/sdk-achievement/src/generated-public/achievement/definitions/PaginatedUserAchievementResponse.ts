/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdditionalInfo } from './AdditionalInfo'
import { Pagination } from './Pagination'
import { UserAchievementResponse } from './UserAchievementResponse'

export const PaginatedUserAchievementResponse = z.object({
  countInfo: AdditionalInfo,
  data: z.array(UserAchievementResponse),
  paging: Pagination
})

export interface PaginatedUserAchievementResponse extends z.TypeOf<typeof PaginatedUserAchievementResponse> {}
