/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkOperationResult = z.object({ affected: z.number().int().nullish() })

export interface BulkOperationResult extends z.TypeOf<typeof BulkOperationResult> {}
