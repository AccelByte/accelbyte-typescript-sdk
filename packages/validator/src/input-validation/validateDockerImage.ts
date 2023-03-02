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

export const ValidateDockerImageErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateDockerImageErrorType = z.infer<typeof ValidateDockerImageErrorType>

export interface ValidateDockerImageOptions {
  isRequired?: boolean
}

export const validateDockerImage = (value: string, { isRequired = true }: ValidateDockerImageOptions = {}) => {
  const REGEX = '^[a-z0-9]+([.\\/_-]{1}[a-z0-9]+)*([:]{1}([0-9a-z]+([.-]{1}[0-9a-z]+)*)+)?$'
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateDockerImageErrorType.enum.empty
  }
  if (!matches(value, REGEX)) {
    return ValidateDockerImageErrorType.enum.invalidFormat
  }
  return validateLength(value)
}
