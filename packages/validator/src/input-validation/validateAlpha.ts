/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isAlpha from 'validator/lib/isAlpha.js'
import isEmpty from 'validator/lib/isEmpty.js'
import isLowercase from 'validator/lib/isLowercase.js'
import isUppercase from 'validator/lib/isUppercase.js'

import { z } from 'zod'
import { CommonValidationErrorType, ThrownErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateAlphaErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateAlphaErrorType = z.infer<typeof ValidateAlphaErrorType>

export interface ValidateAlphaOptions {
  maxLength?: number
  isRequired?: boolean
  isUppercaseOnly?: boolean
  isLowercaseOnly?: boolean
}

export const validateAlpha = (
  value: string,
  { maxLength = 256, isRequired = true, isUppercaseOnly = false, isLowercaseOnly = false }: ValidateAlphaOptions = {}
) => {
  if (isLowercaseOnly && isUppercaseOnly) {
    throw new Error(ThrownErrorType.enum.invalidOption)
  }
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateAlphaErrorType.enum.empty
  }
  if (isUppercaseOnly && !isUppercase(value)) {
    return ValidateAlphaErrorType.enum.invalidFormat
  }
  if (isLowercaseOnly && !isLowercase(value)) {
    return ValidateAlphaErrorType.enum.invalidFormat
  }
  if (!isAlpha(value)) {
    return ValidateAlphaErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: maxLength })
}
