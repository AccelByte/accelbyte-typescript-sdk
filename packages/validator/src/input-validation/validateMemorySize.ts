/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateMemorySizeErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateMemorySizeErrorType = z.infer<typeof ValidateMemorySizeErrorType>

export interface ValidateMemorySizeOptions {
  isRequired?: boolean
}

export const validateMemorySize = (value: string, { isRequired = true }: ValidateMemorySizeOptions = {}) => {
  const MAX_LENGTH = 9
  const REGEX = '^[0-9]+$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateMemorySizeErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateMemorySizeErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: MAX_LENGTH })
}
