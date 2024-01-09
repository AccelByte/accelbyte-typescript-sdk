/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BulkUpdatePlayerRecordRequestDetail } from './BulkUpdatePlayerRecordRequestDetail.js'

export const BulkUpdatePlayerRecordsRequest = z.object({ data: z.array(BulkUpdatePlayerRecordRequestDetail) })

export interface BulkUpdatePlayerRecordsRequest extends z.TypeOf<typeof BulkUpdatePlayerRecordsRequest> {}
