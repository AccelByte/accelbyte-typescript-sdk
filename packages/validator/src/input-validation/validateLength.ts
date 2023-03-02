/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import { z } from 'zod'
import { CommonValidationErrorType, ThrownErrorType } from './constant/errorType'
import { MAX_SHORT_TEXT_LENGTH } from './constant/numbers'

export const ValidateLengthErrorType = z.enum([
  CommonValidationErrorType.enum.empty,
  CommonValidationErrorType.enum.lessThanLengthLimit,
  CommonValidationErrorType.enum.exceedLengthLimit
])
export type ValidateLengthErrorType = z.infer<typeof ValidateLengthErrorType>

export interface ValidateLengthOption {
  min?: number
  max?: number
  isRequired?: boolean
}

export const VALIDATE_LENGTH_DEFAULT_MAX_LENGTH = MAX_SHORT_TEXT_LENGTH

export const validateLength = (
  value: string,
  { min = 1, max = VALIDATE_LENGTH_DEFAULT_MAX_LENGTH, isRequired = true }: ValidateLengthOption = {}
) => {
  const isMinOptionMinus = min < 0
  const isMaxOptionMinus = max < 0
  const isMaxOptionSmallerThanMinOption = max < min
  if (isMinOptionMinus || isMaxOptionMinus || isMaxOptionSmallerThanMinOption) {
    throw new Error(ThrownErrorType.enum.invalidOption)
  }
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateLengthErrorType.enum.empty
  }
  if (value && value.length < min) {
    return ValidateLengthErrorType.enum.lessThanLengthLimit
  }
  if (value && value.length > max) {
    return ValidateLengthErrorType.enum.exceedLengthLimit
  }

  return null
}
