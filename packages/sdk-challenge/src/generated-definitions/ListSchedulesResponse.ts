/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { ScheduleResponse } from './ScheduleResponse.js'

export const ListSchedulesResponse = z.object({ data: z.array(ScheduleResponse), paging: Pagination })

export interface ListSchedulesResponse extends z.TypeOf<typeof ListSchedulesResponse> {}
