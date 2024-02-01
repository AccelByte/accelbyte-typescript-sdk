/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AllocationEvent = z.object({ description: z.string(), time_stamp: z.string(), type: z.string() })

export interface AllocationEvent extends z.TypeOf<typeof AllocationEvent> {}
