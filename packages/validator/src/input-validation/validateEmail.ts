/*
 * Copyright (c) 2019-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { MAX_EMAIL_LENGTH } from './constant/numbers'
import { validateLength, ValidateLengthErrorType } from './validateLength'
import { validateForbiddenWords } from './validateForbiddenWords'

export const ValidateEmailErrorType = z.enum([
  ...ValidateLengthErrorType.options,
  CommonValidationErrorType.enum.invalidFormat,
  CommonValidationErrorType.enum.containsForbiddenWords
])
export type ValidateEmailErrorType = z.infer<typeof ValidateEmailErrorType>

export interface ValidateEmailOptions {
  blockedWord?: string[]
  isRequired?: boolean
  customRegex?: string
  maxLength?: number
  minLength?: number
}

export const validateEmail = (
  value: string,
  { blockedWord = [], isRequired = true, customRegex, maxLength, minLength }: ValidateEmailOptions = {}
) => {
  const REGEX = '^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,15}$'
  if (isRequired && isEmpty(value)) return ValidateEmailErrorType.enum.empty

  if (blockedWord.length > 0) {
    if (validateForbiddenWords(value, blockedWord)) return ValidateEmailErrorType.enum.containsForbiddenWords
  }

  if (!matches(value, customRegex || REGEX)) return ValidateEmailErrorType.enum.invalidFormat

  return validateLength(value, { max: maxLength || MAX_EMAIL_LENGTH, min: minLength })
}
