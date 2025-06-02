/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BulkUpdatePlayerRecordByKeyResponse } from './BulkUpdatePlayerRecordByKeyResponse.js'

export const BulkUpdatePlayerRecordByKeyResponseArray = z.array(BulkUpdatePlayerRecordByKeyResponse)

export interface BulkUpdatePlayerRecordByKeyResponseArray extends z.TypeOf<typeof BulkUpdatePlayerRecordByKeyResponseArray> {}
