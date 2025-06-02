/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GoalScheduleRequest = z.object({ endTime: z.string().nullish(), order: z.number().int(), startTime: z.string() })

export interface GoalScheduleRequest extends z.TypeOf<typeof GoalScheduleRequest> {}
