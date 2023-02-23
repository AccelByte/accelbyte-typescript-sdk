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

export const ValidateChannelNameErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateChannelNameErrorType = z.infer<typeof ValidateChannelNameErrorType>

export interface ValidateChannelNameOptions {
  isRequired?: boolean
}

export const validateChannelName = (value: string, { isRequired = true }: ValidateChannelNameOptions = {}) => {
  const MAX_LENGTH = 64
  const REGEX = '^([a-zA-Z0-9]+)((-|_)?[a-zA-Z0-9])*$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateChannelNameErrorType.enum.empty
  }
  if (!matches(value, REGEX) && value.length <= MAX_LENGTH) {
    return ValidateChannelNameErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: MAX_LENGTH })
}
