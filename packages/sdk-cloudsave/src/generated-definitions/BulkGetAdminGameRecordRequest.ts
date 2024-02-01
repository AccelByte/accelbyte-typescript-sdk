/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkGetAdminGameRecordRequest = z.object({ keys: z.array(z.string()) })

export interface BulkGetAdminGameRecordRequest extends z.TypeOf<typeof BulkGetAdminGameRecordRequest> {}
