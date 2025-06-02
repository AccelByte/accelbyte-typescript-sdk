/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { PublicReasonGroupResponse } from './PublicReasonGroupResponse.js'

export const ReasonGroupListResponse = z.object({ data: z.array(PublicReasonGroupResponse), paging: Pagination })

export interface ReasonGroupListResponse extends z.TypeOf<typeof ReasonGroupListResponse> {}
