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

export const ValidateKubelessHandlerErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateKubelessHandlerErrorType = z.infer<typeof ValidateKubelessHandlerErrorType>

export interface ValidateKubelessHandlerOptions {
  isRequired?: boolean
}

export const validateKubelessHandler = (value: string, { isRequired = true }: ValidateKubelessHandlerOptions = {}) => {
  const REGEX = '[a-zA-Z0-9_]$'
  const MAX_HANDLER_LENGTH = 256
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateKubelessHandlerErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateKubelessHandlerErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: MAX_HANDLER_LENGTH })
}
