/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { PublicReasonResponse } from './PublicReasonResponse.js'

export const PublicReasonListResponse = z.object({ data: z.array(PublicReasonResponse), paging: Pagination })

export interface PublicReasonListResponse extends z.TypeOf<typeof PublicReasonListResponse> {}
