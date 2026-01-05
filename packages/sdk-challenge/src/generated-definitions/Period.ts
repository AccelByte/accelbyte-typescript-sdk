/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Period = z.object({ endTime: z.string(), slot: z.number().int(), startTime: z.string() })

export interface Period extends z.TypeOf<typeof Period> {}
