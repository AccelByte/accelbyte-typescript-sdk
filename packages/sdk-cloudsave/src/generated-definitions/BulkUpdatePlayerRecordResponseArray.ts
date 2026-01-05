/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BulkUpdatePlayerRecordResponse } from './BulkUpdatePlayerRecordResponse.js'

export const BulkUpdatePlayerRecordResponseArray = z.array(BulkUpdatePlayerRecordResponse)

export interface BulkUpdatePlayerRecordResponseArray extends z.TypeOf<typeof BulkUpdatePlayerRecordResponseArray> {}
