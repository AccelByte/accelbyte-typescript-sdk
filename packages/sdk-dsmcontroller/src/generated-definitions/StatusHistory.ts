/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StatusHistory = z.object({ status: z.string(), time_stamp: z.string() })

export interface StatusHistory extends z.TypeOf<typeof StatusHistory> {}
