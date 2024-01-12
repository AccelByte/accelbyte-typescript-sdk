/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkGetAdminPlayerRecordRequest = z.object({ keys: z.array(z.string()) })

export interface BulkGetAdminPlayerRecordRequest extends z.TypeOf<typeof BulkGetAdminPlayerRecordRequest> {}
