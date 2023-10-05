/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ImportErrorDetails = z.object({
  errorCode: z.number().int().nullish(),
  errorField: z.string().nullish(),
  errorMessage: z.string().nullish(),
  errorValue: z.string().nullish(),
  messageVariables: z.record(z.string()).nullish()
})

export interface ImportErrorDetails extends z.TypeOf<typeof ImportErrorDetails> {}
