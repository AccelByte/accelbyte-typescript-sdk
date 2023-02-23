/*
 * Copyright (c) 2020-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { MAX_DISPLAY_NAME_LENGTH } from './constant/numbers'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateUserNameErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateUserNameErrorType = z.infer<typeof ValidateUserNameErrorType>

export const MIN_USERNAME_LENGTH = 3

export interface ValidateUserNameOptions {
  isRequired?: boolean
  maxLength?: number
  minLength?: number
}

/**
 *
 * @param value
 * @param isRequired
 * @param maxLength
 * @param minLength
 *
 * @default isRequired true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 * @default minLength MIN_USERNAME_LENGTH
 */
export const validateUserName = (
  value: string,
  { isRequired = true, maxLength = MAX_DISPLAY_NAME_LENGTH, minLength = MIN_USERNAME_LENGTH }: ValidateUserNameOptions = {}
) => {
  const REGEX = '^[^\\W_-][\\w-]+[^\\W_-]$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateUserNameErrorType.enum.empty
  }

  if (!matches(value, REGEX)) {
    return ValidateUserNameErrorType.enum.invalidFormat
  }

  return validateLength(value, {
    max: maxLength,
    min: minLength
  })
}
