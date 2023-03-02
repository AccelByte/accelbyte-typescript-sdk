/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import matches from 'validator/lib/matches'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateSecretKeyErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateSecretKeyErrorType = z.infer<typeof ValidateSecretKeyErrorType>

export interface ValidateSecretKeyOptions {
  isRequired?: boolean
  maxLength?: number
}

export const validateSecretKey = (value: string, { isRequired = true, maxLength = 256 }: ValidateSecretKeyOptions = {}) => {
  const REGEX = `^[^*\\s]+$`
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateSecretKeyErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateSecretKeyErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: maxLength })
}
