/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { ReportResponse } from './ReportResponse.js'

export const ReportListResponse = z.object({ data: z.array(ReportResponse), paging: Pagination })

export interface ReportListResponse extends z.TypeOf<typeof ReportListResponse> {}
