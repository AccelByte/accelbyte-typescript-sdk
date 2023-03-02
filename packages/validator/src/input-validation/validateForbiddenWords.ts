/*
 * Copyright (c) 2022. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'

export const ValidateForbiddenWordsErrorType = z.enum([
  CommonValidationErrorType.enum.empty,
  CommonValidationErrorType.enum.containsForbiddenWords
])
export type ValidateForbiddenWordsErrorType = z.infer<typeof ValidateForbiddenWordsErrorType>

interface ValidateForbiddenWordsOptions {
  isRequired?: boolean
  isCaseSensitive?: boolean
}

export const validateForbiddenWords = (
  value: string,
  forbiddenWords: string[],
  { isRequired = true, isCaseSensitive = false }: ValidateForbiddenWordsOptions = {}
) => {
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateForbiddenWordsErrorType.enum.empty
  }

  const filteredForbiddenWords = forbiddenWords.filter(Boolean).map(word => (isCaseSensitive ? word : word.toLowerCase()))
  const finalValue = isCaseSensitive ? value : value.toLowerCase()
  const isForbidden = filteredForbiddenWords.some(word => finalValue.includes(word))

  return isForbidden ? ValidateForbiddenWordsErrorType.enum.containsForbiddenWords : null
}
