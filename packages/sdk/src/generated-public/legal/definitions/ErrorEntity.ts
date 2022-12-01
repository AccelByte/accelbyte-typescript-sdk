/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ErrorEntity = z.object({
  errorCode: z.number().int(),
  errorMessage: z.string(),
  messageVariables: z.record(z.string()).nullish(),
  devStackTrace: z.string().nullish()
})

export type ErrorEntity = z.TypeOf<typeof ErrorEntity>
