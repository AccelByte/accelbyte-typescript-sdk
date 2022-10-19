/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkOperationResult = z.object({ affected: z.number().int().nullish() })

export type BulkOperationResult = z.TypeOf<typeof BulkOperationResult>
