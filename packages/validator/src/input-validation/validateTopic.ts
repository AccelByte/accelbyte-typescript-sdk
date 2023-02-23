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

export const ValidateTopicErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateTopicErrorType = z.infer<typeof ValidateTopicErrorType>

export interface ValidateTopicOptions {
  isRequired?: boolean
}

export const validateTopic = (value: string, { isRequired = true }: ValidateTopicOptions = {}) => {
  const REGEX = '^[A-Z]+([_]{1}[A-Z]+)*$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateTopicErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateTopicErrorType.enum.invalidFormat
  }
  return validateLength(value)
}
