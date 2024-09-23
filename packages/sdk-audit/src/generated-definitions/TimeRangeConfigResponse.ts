/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TimeRangeConfigResponse = z.object({ day: z.number().int() })

export interface TimeRangeConfigResponse extends z.TypeOf<typeof TimeRangeConfigResponse> {}
