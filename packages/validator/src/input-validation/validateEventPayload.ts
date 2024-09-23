/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateEventPayloadErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateEventPayloadErrorType = z.infer<typeof ValidateEventPayloadErrorType>

export interface ValidateEventPayloadOptions {
  maxLength?: number
  isRequired?: boolean
}

export const validateEventPayload = (value: string, { maxLength = 255, isRequired = true }: ValidateEventPayloadOptions = {}) => {
  const REGEX = '^\\b((?=[\\w])[\\w]+(\\.[\\w]+)*:)+[\\w]{1,255}\\b$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateEventPayloadErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateEventPayloadErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: maxLength })
}
