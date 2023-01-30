/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import matches from 'validator/lib/matches'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateBase64ErrorType = z.enum([CommonValidationErrorType.enum.empty, CommonValidationErrorType.enum.invalidFormat])
export type ValidateBase64ErrorType = z.infer<typeof ValidateBase64ErrorType>

export interface ValidateBase64Options {
  isRequired?: boolean
}

export const validateBase64 = (value: string, { isRequired = true }: ValidateBase64Options = {}) => {
  const REGEX = '^[A-Za-z0-9+/]+={0,2}$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateBase64ErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateBase64ErrorType.enum.invalidFormat
  }

  return null
}
