/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateUuidV4WithoutHyphenErrorType = z.enum([
  CommonValidationErrorType.enum.empty,
  CommonValidationErrorType.enum.invalidFormat
])
export type ValidateUuidV4WithoutHyphenErrorType = z.infer<typeof ValidateUuidV4WithoutHyphenErrorType>

export interface ValidateUuidV4WithoutHyphenOptions {
  isRequired?: boolean
}

export const validateUuidV4WithoutHyphen = (value: string, { isRequired = true }: ValidateUuidV4WithoutHyphenOptions = {}) => {
  const REGEX = '^[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15}$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateUuidV4WithoutHyphenErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateUuidV4WithoutHyphenErrorType.enum.invalidFormat
  }

  return null
}
