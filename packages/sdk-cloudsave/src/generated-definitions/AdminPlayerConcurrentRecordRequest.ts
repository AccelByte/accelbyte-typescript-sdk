/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminPlayerConcurrentRecordRequest = z.object({ updatedAt: z.string(), value: z.record(z.any()) })

export interface AdminPlayerConcurrentRecordRequest extends z.TypeOf<typeof AdminPlayerConcurrentRecordRequest> {}
