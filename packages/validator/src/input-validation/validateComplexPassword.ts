/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import matches from 'validator/lib/matches'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateComplexPasswordErrorType = z.enum([CommonValidationErrorType.enum.empty, CommonValidationErrorType.enum.invalidFormat])
export type ValidateComplexPasswordErrorType = z.infer<typeof ValidateComplexPasswordErrorType>

export interface ValidateComplexPasswordOptions {
  isRequired?: boolean
}

/* DEPRECATED
 * please use validateComplexPasswordAsObject instead of this function
 * */
export const validateComplexPassword = (value: string, { isRequired = true }: ValidateComplexPasswordOptions = {}) => {
  const REGEX =
    // tslint:disable-next-line
    '^(?:(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\\1{2,})[A-Za-z0-9!~<>,;:_=?*+#."&§%°()\\|\\[\\]\\-\\$\\^\\@\\/]{8,32}$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateComplexPasswordErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateComplexPasswordErrorType.enum.invalidFormat
  }

  return null
}
