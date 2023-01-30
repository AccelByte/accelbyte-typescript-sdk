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

export const ValidatePathErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidatePathErrorType = z.infer<typeof ValidatePathErrorType>

export interface ValidatePathSizeOptions {
  isRequired?: boolean
  maxLength?: number
}

export const validatePath = (value: string, { isRequired = true, maxLength }: ValidatePathSizeOptions = {}) => {
  const REGEX = '^(\\/[a-zA-Z0-9_-]+)+$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidatePathErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidatePathErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: maxLength })
}
