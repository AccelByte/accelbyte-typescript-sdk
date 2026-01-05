/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdminReasonResponse } from './AdminReasonResponse.js'
import { Pagination } from './Pagination.js'

export const AdminReasonListResponse = z.object({ data: z.array(AdminReasonResponse), paging: Pagination })

export interface AdminReasonListResponse extends z.TypeOf<typeof AdminReasonListResponse> {}
