/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdminPlayerRecordResponse } from './AdminPlayerRecordResponse.js'

export const BulkGetAdminPlayerRecordResponse = z.object({ data: z.array(AdminPlayerRecordResponse) })

export interface BulkGetAdminPlayerRecordResponse extends z.TypeOf<typeof BulkGetAdminPlayerRecordResponse> {}
