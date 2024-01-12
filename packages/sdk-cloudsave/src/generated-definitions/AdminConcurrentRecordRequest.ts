/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminConcurrentRecordRequest = z.object({ set_by: z.string(), updatedAt: z.string(), value: z.record(z.any()) })

export interface AdminConcurrentRecordRequest extends z.TypeOf<typeof AdminConcurrentRecordRequest> {}
