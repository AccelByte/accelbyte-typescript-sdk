/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FieldValidationError } from './FieldValidationError.js'

export const ValidationErrorEntity = z.object({
  errorCode: z.number().int(),
  errorMessage: z.string(),
  errors: z.array(FieldValidationError).nullish()
})

export interface ValidationErrorEntity extends z.TypeOf<typeof ValidationErrorEntity> {}
