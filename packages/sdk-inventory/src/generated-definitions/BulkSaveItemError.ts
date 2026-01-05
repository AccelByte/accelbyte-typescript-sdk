/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkSaveItemError = z.object({
  errorCode: z.number().int(),
  errorMessage: z.string(),
  slotId: z.string(),
  sourceItemId: z.string()
})

export interface BulkSaveItemError extends z.TypeOf<typeof BulkSaveItemError> {}
