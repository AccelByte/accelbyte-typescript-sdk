/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateNotEmptyErrorType = z.enum([CommonValidationErrorType.enum.empty])
export type ValidateNotEmptyErrorType = z.infer<typeof ValidateNotEmptyErrorType>

interface Options {
  // eslint-disable-next-line camelcase
  ignore_whitespace: boolean
}

export const validateNotEmpty = (value: string, options?: Options) => {
  if (isEmpty(value, options)) {
    return ValidateNotEmptyErrorType.enum.empty
  }
  return null
}
