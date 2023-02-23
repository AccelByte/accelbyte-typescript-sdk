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

export const ValidatePermissionResourceErrorType = z.enum([
  ...ValidateLengthErrorType.options,
  CommonValidationErrorType.enum.invalidFormat
])
export type ValidatePermissionResourceErrorType = z.infer<typeof ValidatePermissionResourceErrorType>

export interface ValidatePermissionResourceOptions {
  isRequired?: boolean
}

export const validatePermissionResource = (value: string, { isRequired = true }: ValidatePermissionResourceOptions = {}) => {
  const REGEX = '^[A-Z]+([:]{1}([A-Z]+|(({[a-zA-Z]+})|[a-zA-Z0-9]+|\\*)))*$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidatePermissionResourceErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidatePermissionResourceErrorType.enum.invalidFormat
  }
  return validateLength(value)
}
