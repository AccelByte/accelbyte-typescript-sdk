/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { ScheduleByGoalResponse } from './ScheduleByGoalResponse.js'

export const ListScheduleByGoalResponse = z.object({ data: z.array(ScheduleByGoalResponse), paging: Pagination })

export interface ListScheduleByGoalResponse extends z.TypeOf<typeof ListScheduleByGoalResponse> {}
