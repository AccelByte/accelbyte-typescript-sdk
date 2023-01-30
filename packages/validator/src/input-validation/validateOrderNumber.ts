/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import matches from 'validator/lib/matches'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateOrderNumberErrorType = z.enum([CommonValidationErrorType.enum.empty, CommonValidationErrorType.enum.invalidFormat])
export type ValidateOrderNumberErrorType = z.infer<typeof ValidateOrderNumberErrorType>

export interface ValidateOrderNumberOptions {
  isRequired?: boolean
}

export const validateOrderNumber = (value: string, { isRequired = true }: ValidateOrderNumberOptions = {}) => {
  const REGEX = '^O[0-9]{16,}$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateOrderNumberErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateOrderNumberErrorType.enum.invalidFormat
  }

  return null
}
