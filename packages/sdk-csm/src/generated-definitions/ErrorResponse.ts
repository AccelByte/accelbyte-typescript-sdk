/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ErrorResponse = z.object({
  error: z.string(),
  errorCode: z.number().int(),
  errorMessage: z.string(),
  errors: z.string(),
  messageVariables: z.record(z.string()),
  name: z.string(),
  reason: z.string()
})

export interface ErrorResponse extends z.TypeOf<typeof ErrorResponse> {}
