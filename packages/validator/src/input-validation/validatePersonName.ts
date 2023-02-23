/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { MAX_DISPLAY_NAME_LENGTH } from './constant/numbers'
import { validateLength, ValidateLengthErrorType, ValidateLengthOption } from './validateLength'

export const ValidatePersonNameErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidatePersonNameErrorType = z.infer<typeof ValidatePersonNameErrorType>

export interface ValidatePersonNameOptions {
  isRequired?: boolean
}

export const validatePersonName = (value: string, { isRequired = true }: ValidatePersonNameOptions = {}) => {
  const REGEX = "^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$"
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidatePersonNameErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidatePersonNameErrorType.enum.invalidFormat
  }
  const validateLengthOptions: ValidateLengthOption = { min: 2, max: MAX_DISPLAY_NAME_LENGTH }
  return validateLength(value, validateLengthOptions)
}
