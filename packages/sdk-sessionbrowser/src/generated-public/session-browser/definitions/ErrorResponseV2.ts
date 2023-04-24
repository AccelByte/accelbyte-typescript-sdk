/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ErrorResponseV2 = z.object({
  attributes: z.record(z.string()),
  errorCode: z.number().int(),
  errorMessage: z.string(),
  message: z.string(),
  name: z.string()
})

export interface ErrorResponseV2 extends z.TypeOf<typeof ErrorResponseV2> {}
