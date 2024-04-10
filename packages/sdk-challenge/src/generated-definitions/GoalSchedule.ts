/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GoalSchedule = z.object({ endTime: z.string().nullish(), order: z.number().int(), startTime: z.string() })

export interface GoalSchedule extends z.TypeOf<typeof GoalSchedule> {}
