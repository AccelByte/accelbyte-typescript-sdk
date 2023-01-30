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

export const ValidateUrlErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateUrlErrorType = z.infer<typeof ValidateUrlErrorType>

export interface ValidateUrlOptions {
  isRequired?: boolean
  allowCustomProtocol?: boolean
}

export const validateUrl = (value: string, { isRequired = true, allowCustomProtocol = false }: ValidateUrlOptions = {}) => {
  const DEFAULT_MAX_URL_LENGTH = 2000
  const REGEX =
    // tslint:disable-next-line
    "^((((https?|ftps?|gopher|telnet|nntp):\\/\\/)|(mailto:|news:|orbis:|tel:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:]])?$"

  const isValidUrl = (url: string): boolean => {
    try {
      return !!new URL(url)
    } catch (error) {
      return false
    }
  }

  const isContainingInvalidPunctuations = (url: string) => {
    const protocolPunctuation = url.match(/:\/\//g)
    let mainUrlBody

    if (protocolPunctuation) {
      if (protocolPunctuation.length > 1) {
        return true
      }
      mainUrlBody = url.slice(url.indexOf('://') + 3)
    } else {
      mainUrlBody = url
    }

    return /[^a-zA-Z0-9_-]{3,}|[{}|`~,\\]/.test(mainUrlBody)
  }

  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateUrlErrorType.enum.empty
  }

  if (isContainingInvalidPunctuations(value)) {
    return ValidateUrlErrorType.enum.invalidFormat
  }

  if (allowCustomProtocol && !isValidUrl(value)) {
    return ValidateUrlErrorType.enum.invalidFormat
  }

  if (!allowCustomProtocol && !matches(value, REGEX)) {
    return ValidateUrlErrorType.enum.invalidFormat
  }

  return validateLength(value, { max: DEFAULT_MAX_URL_LENGTH })
}
