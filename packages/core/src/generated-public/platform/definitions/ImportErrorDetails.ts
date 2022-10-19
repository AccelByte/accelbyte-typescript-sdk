/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ImportErrorDetails = z.object({
  errorCode: z.number().int().nullish(),
  errorMessage: z.string().nullish(),
  messageVariables: z.record(z.string()).nullish()
})

export type ImportErrorDetails = z.TypeOf<typeof ImportErrorDetails>
