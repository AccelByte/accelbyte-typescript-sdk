/*
 * Copyright (c) 2020. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import matches from 'validator/lib/matches'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateStatisticCodeErrorType = z.enum([
  ...ValidateLengthErrorType.options,
  CommonValidationErrorType.enum.invalidFormat,
  CommonValidationErrorType.enum.alreadyUsed
])
export type ValidateStatisticCodeErrorType = z.infer<typeof ValidateStatisticCodeErrorType>

export interface ValidateStatisticCodeOptions {
  isRequired?: boolean
}

export const validateStatisticCode = (value: string, { isRequired = true }: ValidateStatisticCodeOptions = {}) => {
  const REGEX = '^[a-z0-9]+([-]{0,1}[a-z0-9]+)*$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateStatisticCodeErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateStatisticCodeErrorType.enum.invalidFormat
  }
  return validateLength(value)
}
