/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdminGameRecordResponse } from './AdminGameRecordResponse.js'

export const BulkGetAdminGameRecordResponse = z.object({ data: z.array(AdminGameRecordResponse) })

export interface BulkGetAdminGameRecordResponse extends z.TypeOf<typeof BulkGetAdminGameRecordResponse> {}
