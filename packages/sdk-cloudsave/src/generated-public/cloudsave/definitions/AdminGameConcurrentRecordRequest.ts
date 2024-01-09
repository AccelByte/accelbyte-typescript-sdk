/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminGameConcurrentRecordRequest = z.object({ updatedAt: z.string(), value: z.record(z.any()) })

export interface AdminGameConcurrentRecordRequest extends z.TypeOf<typeof AdminGameConcurrentRecordRequest> {}
