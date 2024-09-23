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

export const ValidateKubelessNameErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateKubelessNameErrorType = z.infer<typeof ValidateKubelessNameErrorType>

export interface ValidateKubelessNameOptions {
  isRequired?: boolean
}

export const validateKubelessName = (value: string, { isRequired = true }: ValidateKubelessNameOptions = {}) => {
  const REGEX = '^[a-zA-Z]+(?:([a-zA-Z0-9]+)[-]*[a-zA-Z0-9]+)*$'
  const MAX_KUBELESS_NAME_LENGTH = 64
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateKubelessNameErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateKubelessNameErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: MAX_KUBELESS_NAME_LENGTH })
}
