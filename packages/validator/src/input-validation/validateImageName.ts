/*
 * Copyright (c) 2022. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import matches from 'validator/lib/matches'
import XRegExp from 'xregexp'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { ValidateAlphaErrorType } from './validateAlpha'

export const ValidateImageNameErrorType = z.enum([
  CommonValidationErrorType.enum.nameIsNotAllowed,
  CommonValidationErrorType.enum.alreadyUsed
])
export type ValidateImageNameErrorType = z.infer<typeof ValidateImageNameErrorType>

export interface ValidateNameRegexOptions {
  allowUnicode?: boolean
}

export const validateImageNameRegex = (value: string, regex: string, { allowUnicode = false }: ValidateNameRegexOptions = {}) => {
  if (isEmpty(value)) return ValidateAlphaErrorType.enum.empty

  if (allowUnicode && !XRegExp(regex).test(value)) {
    return ValidateImageNameErrorType.enum.nameIsNotAllowed
  }

  if (!allowUnicode && !matches(value, regex)) {
    return ValidateImageNameErrorType.enum.nameIsNotAllowed
  }

  return null
}
