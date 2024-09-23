/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isAlphanumeric from 'validator/lib/isAlphanumeric.js'
import isEmpty from 'validator/lib/isEmpty.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateAlphaNumericErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateAlphaNumericErrorType = z.infer<typeof ValidateAlphaNumericErrorType>

export interface ValidateAlphanumericOptions {
  maxLength?: number
  isRequired?: boolean
}

export const validateAlphanumeric = (value: string, { maxLength = 256, isRequired = true }: ValidateAlphanumericOptions = {}) => {
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateAlphaNumericErrorType.enum.empty
  }
  if (!isAlphanumeric(value)) {
    return ValidateAlphaNumericErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: maxLength })
}
