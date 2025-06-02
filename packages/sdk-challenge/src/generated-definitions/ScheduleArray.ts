/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Schedule } from './Schedule.js'

export const ScheduleArray = z.array(Schedule)

export interface ScheduleArray extends z.TypeOf<typeof ScheduleArray> {}
