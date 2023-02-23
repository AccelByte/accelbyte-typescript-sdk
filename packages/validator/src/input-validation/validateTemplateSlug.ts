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

export const ValidateTemplateSlugErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateTemplateSlugErrorType = z.infer<typeof ValidateTemplateSlugErrorType>

export interface ValidateTemplateSlugOptions {
  isRequired?: boolean
}

export const validateTemplateSlug = (value: string, { isRequired = true }: ValidateTemplateSlugOptions = {}) => {
  const REGEX = '^[a-zA-Z]+([-]{1}[a-zA-Z]+)*$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateTemplateSlugErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateTemplateSlugErrorType.enum.invalidFormat
  }
  return validateLength(value)
}
