/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import matches from 'validator/lib/matches'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateSkuErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateSkuErrorType = z.infer<typeof ValidateSkuErrorType>

const MAXIMUM_SKU_LENGTH = 32

export interface ValidateSkuOptions {
  isRequired?: boolean
  maxLength?: number
}

export const validateSku = (value: string, { isRequired = true, maxLength = MAXIMUM_SKU_LENGTH }: ValidateSkuOptions = {}) => {
  const REGEX = '^[a-zA-Z0-9]+([_:-]{1}[a-zA-Z0-9]+)*$|^$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateSkuErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateSkuErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: maxLength })
}
