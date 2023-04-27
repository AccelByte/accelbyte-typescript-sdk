/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ContributorResponse } from './ContributorResponse.js'
import { Pagination } from './Pagination.js'

export const PaginatedContributorResponse = z.object({ data: z.array(ContributorResponse), paging: Pagination })

export interface PaginatedContributorResponse extends z.TypeOf<typeof PaginatedContributorResponse> {}
