/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ScheduleByGoalResponse = z.object({ endTime: z.string(), startTime: z.string() })

export interface ScheduleByGoalResponse extends z.TypeOf<typeof ScheduleByGoalResponse> {}
