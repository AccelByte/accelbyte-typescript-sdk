/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BulkUpdatePlayerRecordByKeyRequestDetail } from './BulkUpdatePlayerRecordByKeyRequestDetail.js'

export const BulkUpdatePlayerRecordsByKeyRequest = z.object({ data: z.array(BulkUpdatePlayerRecordByKeyRequestDetail) })

export interface BulkUpdatePlayerRecordsByKeyRequest extends z.TypeOf<typeof BulkUpdatePlayerRecordsByKeyRequest> {}
