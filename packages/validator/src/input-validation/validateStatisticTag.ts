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

export const ValidateStatisticTagErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateStatisticTagErrorType = z.infer<typeof ValidateStatisticTagErrorType>

export interface ValidateStatisticTagOptions {
  isRequired?: boolean
}

export const validateStatisticTag = (value: string, { isRequired = true }: ValidateStatisticTagOptions = {}) => {
  const MAX_LENGTH = 36
  const REGEX = '^[a-zA-Z0-9]+([_]{1}[a-zA-Z0-9]+)*$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateStatisticTagErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateStatisticTagErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: MAX_LENGTH })
}
