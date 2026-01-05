/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BulkStatOperationResult } from './BulkStatOperationResult.js'

export const BulkStatOperationResultArray = z.array(BulkStatOperationResult)

export interface BulkStatOperationResultArray extends z.TypeOf<typeof BulkStatOperationResultArray> {}
