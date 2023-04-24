/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'
import { UserContributionResponse } from './UserContributionResponse'

export const PaginatedUserContributionResponse = z.object({ data: z.array(UserContributionResponse), paging: Pagination })

export interface PaginatedUserContributionResponse extends z.TypeOf<typeof PaginatedUserContributionResponse> {}
