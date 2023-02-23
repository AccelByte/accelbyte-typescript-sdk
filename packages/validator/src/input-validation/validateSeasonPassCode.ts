/*
 * Copyright (c) 2020-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateSeasonPassCodeErrorType = z.enum([
  ...ValidateLengthErrorType.options,
  CommonValidationErrorType.enum.invalidFormat,
  CommonValidationErrorType.enum.alreadyUsed
])
export type ValidateSeasonPassCodeErrorType = z.infer<typeof ValidateSeasonPassCodeErrorType>

export interface ValidateSeasonPassCodeOptions {
  isRequired?: boolean
}

export const validateSeasonPassCode = (value: string, { isRequired = true }: ValidateSeasonPassCodeOptions = {}) => {
  const REGEX = '^[a-z0-9]+([_:-]{1}[a-z0-9]+)*$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateSeasonPassCodeErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateSeasonPassCodeErrorType.enum.invalidFormat
  }
  return validateLength(value)
}
