/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { UserContributionResponse } from './UserContributionResponse.js'

export const PaginatedUserContributionResponse = z.object({ data: z.array(UserContributionResponse), paging: Pagination })

export interface PaginatedUserContributionResponse extends z.TypeOf<typeof PaginatedUserContributionResponse> {}
