/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MonthlyConfig = z.object({ resetDate: z.number().int(), resetTime: z.string() })

export interface MonthlyConfig extends z.TypeOf<typeof MonthlyConfig> {}
