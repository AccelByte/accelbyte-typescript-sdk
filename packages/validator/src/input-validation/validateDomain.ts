/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import matches from 'validator/lib/matches'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateDomainErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateDomainErrorType = z.infer<typeof ValidateDomainErrorType>

export interface ValidateDomainOptions {
  maxLength?: number
  isRequired?: boolean
  isSubdomainOnly?: boolean
}

export const validateDomain = (
  value: string,
  { maxLength = 63, isRequired = true, isSubdomainOnly = false }: ValidateDomainOptions = {}
) => {
  const REGEX = isSubdomainOnly ? '^\\w[\\w.-]+\\w$' : '^\\b((?=[a-z0-9-]{1,63}\\.)[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,63}\\b$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateDomainErrorType.enum.empty
  }
  if (!matches(value, REGEX) && value.length <= maxLength) {
    return ValidateDomainErrorType.enum.invalidFormat
  }
  return validateLength(value, { max: maxLength })
}
