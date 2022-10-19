/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FieldValidationError = z.object({
  errorCode: z.string().nullish(),
  errorField: z.string().nullish(),
  errorValue: z.string().nullish(),
  errorMessage: z.string().nullish(),
  messageVariables: z.record(z.string()).nullish()
})

export type FieldValidationError = z.TypeOf<typeof FieldValidationError>
