/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ErrorResponse } from './ErrorResponse.js'

export const ChainingOperationResp = z.object({
  errorDetails: ErrorResponse.nullish(),
  message: z.string(),
  replayed: z.boolean().nullish(),
  requestId: z.string().nullish()
})

export interface ChainingOperationResp extends z.TypeOf<typeof ChainingOperationResp> {}
