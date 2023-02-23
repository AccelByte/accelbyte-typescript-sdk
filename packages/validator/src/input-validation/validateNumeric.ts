/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import isNumeric from 'validator/lib/isNumeric.js'
import { z } from 'zod'
import { CommonValidationErrorType, ThrownErrorType } from './constant/errorType'

export const ValidateNumericErrorType = z.enum([
  CommonValidationErrorType.enum.empty,
  CommonValidationErrorType.enum.lessThanMinimumValue,
  CommonValidationErrorType.enum.exceedMaximumValue,
  CommonValidationErrorType.enum.invalidValue,
  CommonValidationErrorType.enum.containsDecimal
])
export type ValidateNumericErrorType = z.infer<typeof ValidateNumericErrorType>

export interface ValidateNumericOption {
  min?: number
  max?: number
  isRequired?: boolean
  excludedNumbers?: number[]
  allowDecimal?: boolean
}

export const validateNumeric = (
  value: string,
  {
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    isRequired = true,
    excludedNumbers = [],
    allowDecimal = true
  }: ValidateNumericOption = {}
) => {
  const isMaxOptionSmallerThanMinOption = max < min
  const isDecimalNumber = Number(value) % 1 !== 0
  if (isMaxOptionSmallerThanMinOption) {
    throw new Error(ThrownErrorType.enum.invalidOption)
  }
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateNumericErrorType.enum.empty
  }
  if (!isNumeric(value) || Number(value) in excludedNumbers) {
    return ValidateNumericErrorType.enum.invalidValue
  }
  if (Number(value) < min) {
    return ValidateNumericErrorType.enum.lessThanMinimumValue
  }
  if (Number(value) > max) {
    return ValidateNumericErrorType.enum.exceedMaximumValue
  }
  if (!allowDecimal && isDecimalNumber) {
    return ValidateNumericErrorType.enum.containsDecimal
  }

  return null
}
