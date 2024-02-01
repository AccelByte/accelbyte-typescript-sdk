/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const WeeklyConfig = z.object({ resetDay: z.number().int(), resetTime: z.string() })

export interface WeeklyConfig extends z.TypeOf<typeof WeeklyConfig> {}
