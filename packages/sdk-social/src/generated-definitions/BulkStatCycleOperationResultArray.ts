/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BulkStatCycleOperationResult } from './BulkStatCycleOperationResult.js'

export const BulkStatCycleOperationResultArray = z.array(BulkStatCycleOperationResult)

export interface BulkStatCycleOperationResultArray extends z.TypeOf<typeof BulkStatCycleOperationResultArray> {}
