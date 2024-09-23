/*
 * Copyright (c) 2019-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateUrlErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateUrlErrorType = z.infer<typeof ValidateUrlErrorType>

export interface ValidateUrlOptions {
  /**
   * When set to `false`, URL with 0 length will return `null`.
   *
   * @default true
   */
  isRequired?: boolean
  /**
   * When set to `true`, it will allow custom protocol. It is discouraged to set this to `true` as it exposes room for XSS attack,
   * as `javascript:` and `vbscript:` are both valid protocols.
   *
   * @default false
   */
  allowCustomProtocol?: boolean
}

const DEFAULT_MAX_URL_LENGTH = 2000
const INVALID_PROTOCOL_REGEX = /(javascript|vbscript):/
const INVALID_PUNCTUATION_REGEX = /[{}|`~,]/

export const validateUrl = (value: string, { isRequired = true, allowCustomProtocol = false }: ValidateUrlOptions = {}) => {
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateUrlErrorType.enum.empty
  }

  const validateLengthResult = validateLength(value, { max: DEFAULT_MAX_URL_LENGTH })
  if (validateLengthResult) return validateLengthResult

  try {
    const url = new URL(value)

    if (isContainingInvalidPunctuations(url)) {
      throw new Error('URL should not contain invalid punctuations')
    }

    if (!allowCustomProtocol && INVALID_PROTOCOL_REGEX.test(url.protocol)) {
      throw new Error('URL should not use an invalid protocol')
    }

    return null
  } catch (err) {
    return ValidateUrlErrorType.enum.invalidFormat
  }
}

const isContainingInvalidPunctuations = (url: URL) => {
  // From https://example.com/path?query=value#hash, take example.com/path?query=value#hash.
  const scheme = `${url.protocol}//`
  let schemeEndIndex = url.href.indexOf(`${url.protocol}//`)
  if (schemeEndIndex === -1) {
    schemeEndIndex = url.protocol.length
  } else {
    schemeEndIndex = scheme.length
  }

  const mainUrlBody = url.href.slice(schemeEndIndex)
  return INVALID_PUNCTUATION_REGEX.test(mainUrlBody)
}
