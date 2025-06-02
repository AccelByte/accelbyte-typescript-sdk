/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GoalInSchedulesResponse } from './GoalInSchedulesResponse.js'

export const ScheduleResponse = z.object({ endTime: z.string(), goals: z.array(GoalInSchedulesResponse), startTime: z.string() })

export interface ScheduleResponse extends z.TypeOf<typeof ScheduleResponse> {}
