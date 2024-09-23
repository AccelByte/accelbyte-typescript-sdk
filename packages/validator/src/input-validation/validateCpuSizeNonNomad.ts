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

// tslint:disable-next-line:max-line-length
export const ValidateCpuSizeNonNomadErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateCpuSizeNonNomadErrorType = z.infer<typeof ValidateCpuSizeNonNomadErrorType>

export interface ValidateCpuSizeNonNomadOptions {
  isRequired?: boolean
}

export const validateCpuSizeNonNomad = (value: string, { isRequired = true }: ValidateCpuSizeNonNomadOptions = {}) => {
  const MAX_LENGTH = 8
  const REGEX = '^[0-9]+m$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateCpuSizeNonNomadErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateCpuSizeNonNomadErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: MAX_LENGTH })
}
