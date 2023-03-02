/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateJSONErrorType = z.enum([CommonValidationErrorType.enum.empty, CommonValidationErrorType.enum.invalidFormat])
export type ValidateJSONErrorType = z.infer<typeof ValidateJSONErrorType>

export interface ValidateJSONOption {
  isRequired?: boolean
  isObject?: boolean
}

export const validateJSON = (value: string, { isRequired = true, isObject = true }: ValidateJSONOption = {}) => {
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateJSONErrorType.enum.empty
  }

  try {
    const parsedJSON = JSON.parse(value)
    if (isObject && typeof parsedJSON !== 'object') {
      return ValidateJSONErrorType.enum.invalidFormat
    }
    return null
  } catch (e) {
    return ValidateJSONErrorType.enum.invalidFormat
  }
}
