/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import matches from 'validator/lib/matches'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

// tslint:disable-next-line:max-line-length
export const ValidateMemorySizeNonNomadErrorType = z.enum([
  ...ValidateLengthErrorType.options,
  CommonValidationErrorType.enum.invalidFormat
])
export type ValidateMemorySizeNonNomadErrorType = z.infer<typeof ValidateMemorySizeNonNomadErrorType>

export interface ValidateMemorySizeNonNomadOptions {
  isRequired?: boolean
}
// tslint:disable-next-line:max-line-length
export const validateMemorySizeNonNomad = (value: string, { isRequired = true }: ValidateMemorySizeNonNomadOptions = {}) => {
  const MAX_LENGTH = 9
  const REGEX = '^[0-9]+Mi$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateMemorySizeNonNomadErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateMemorySizeNonNomadErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: MAX_LENGTH })
}
