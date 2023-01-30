/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import matches from 'validator/lib/matches'
import XRegExp from 'xregexp'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateRegexErrorType = z.enum([CommonValidationErrorType.enum.invalidFormat])
export type ValidateRegexErrorType = z.infer<typeof ValidateRegexErrorType>

export interface ValidateRegexOptions {
  allowUnicode?: boolean
}

export const validateRegex = (value: string, regex: string, { allowUnicode = false }: ValidateRegexOptions = {}) => {
  if (allowUnicode && !XRegExp(regex).test(value)) {
    return ValidateRegexErrorType.enum.invalidFormat
  }

  if (!allowUnicode && !matches(value, regex)) {
    return ValidateRegexErrorType.enum.invalidFormat
  }

  return null
}
