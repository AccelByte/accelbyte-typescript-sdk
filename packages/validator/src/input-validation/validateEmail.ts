/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import matches from 'validator/lib/matches'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { MAX_EMAIL_LENGTH } from './constant/numbers'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateEmailErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateEmailErrorType = z.infer<typeof ValidateEmailErrorType>

export interface ValidateEmailOptions {
  isRequired?: boolean
}

export const validateEmail = (value: string, { isRequired = true }: ValidateEmailOptions = {}) => {
  const REGEX = '^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,15}$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateEmailErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateEmailErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: MAX_EMAIL_LENGTH })
}
