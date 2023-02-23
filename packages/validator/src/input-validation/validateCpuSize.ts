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

export const ValidateCpuSizeErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateCpuSizeErrorType = z.infer<typeof ValidateCpuSizeErrorType>

export interface ValidateCpuSizeOptions {
  isRequired?: boolean
}

export const validateCpuSize = (value: string, { isRequired = true }: ValidateCpuSizeOptions = {}) => {
  const MAX_LENGTH = 8
  const REGEX = '^[0-9]+$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateCpuSizeErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateCpuSizeErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: MAX_LENGTH })
}
