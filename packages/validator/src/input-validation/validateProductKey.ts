/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateProductKeyErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateProductKeyErrorType = z.infer<typeof ValidateProductKeyErrorType>

export interface ValidateProductKeyOptions {
  isRequired?: boolean
  max?: number
}

const MAX_LENGTH = 120

export const validateProductKey = (value: string, { isRequired = true, max = MAX_LENGTH }: ValidateProductKeyOptions = {}) => {
  const REGEX = '^([a-z0-9]+)(_?[a-z0-9])*$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateProductKeyErrorType.enum.empty
  }
  if (!matches(value, REGEX) && value.length <= max) {
    return ValidateProductKeyErrorType.enum.invalidFormat
  }
  return validateLength(value, { max })
}
