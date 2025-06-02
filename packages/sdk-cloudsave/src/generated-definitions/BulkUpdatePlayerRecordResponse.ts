/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkUpdatePlayerRecordResponse = z.object({ detail: z.record(z.any()), key: z.string(), success: z.boolean() })

export interface BulkUpdatePlayerRecordResponse extends z.TypeOf<typeof BulkUpdatePlayerRecordResponse> {}
