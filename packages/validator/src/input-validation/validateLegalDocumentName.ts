/*
 * Copyright (c) 2020-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { MAX_SHORT_TEXT_LENGTH } from './constant/numbers'
import { validateLength, ValidateLengthErrorType } from './validateLength'

export const ValidateLegalDocumentNameErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidateLegalDocumentNameErrorType = z.infer<typeof ValidateLegalDocumentNameErrorType>

export interface ValidateLegalDocumentNameOptions {
  isRequired?: boolean
  maxLength?: number
}

/**
 *
 * @param value
 * @param isRequired
 * @param maxLength
 *
 * @default isRequired true
 * @default maxLength MAX_SHORT_TEXT_LENGTH
 */
export const validateLegalDocumentName = (
  value: string,
  { isRequired = true, maxLength = MAX_SHORT_TEXT_LENGTH }: ValidateLegalDocumentNameOptions = {}
) => {
  const REGEX = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/

  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateLegalDocumentNameErrorType.enum.empty
  }

  if (!matches(value, REGEX)) {
    return ValidateLegalDocumentNameErrorType.enum.invalidFormat
  }

  return validateLength(value, {
    max: maxLength
  })
}
