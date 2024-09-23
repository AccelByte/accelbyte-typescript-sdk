/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { MAX_SHORT_TEXT_LENGTH } from './constant/numbers'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateDatabaseNameErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateDatabaseNameErrorType = z.infer<typeof ValidateDatabaseNameErrorType>

export interface ValidateDatabaseNameOptions {
  maxLength?: number
  isRequired?: boolean
}

export const validateDatabaseName = (
  value: string,
  { maxLength = MAX_SHORT_TEXT_LENGTH, isRequired = true }: ValidateDatabaseNameOptions = {}
) => {
  const REGEX = '[a-zA-Z0-9_]$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateDatabaseNameErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateDatabaseNameErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: maxLength })
}
