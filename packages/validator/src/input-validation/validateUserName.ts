/*
 * Copyright (c) 2020-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import matches from 'validator/lib/matches.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { MAX_DISPLAY_NAME_LENGTH } from './constant/numbers'
import { validateLength, ValidateLengthErrorType } from './validateLength'
import {
  REGEX_ALPHANUMERIC_WITH_HYPHEN,
  REGEX_LETTER_CASE,
  REGEX_LOWERCASE,
  REGEX_MIXED_LETTER_CASE,
  REGEX_ALL_SPECIAL_CHARACTERS,
  REGEX_SPECIAL_CHARACTER_WITH_ALLOW_SPACE,
  REGEX_UPPERCASE
} from './constant/regex'
import { tokenizeAndValidateBadWords, ValidateBadWordsErrorType } from './validateBadWords'

export const ValidateUserNameErrorType = z.enum([
  ...ValidateLengthErrorType.options,
  CommonValidationErrorType.enum.invalidFormat,
  ValidateBadWordsErrorType.enum.containsBadWords
])
export type ValidateUserNameErrorType = z.infer<typeof ValidateUserNameErrorType>

export const MIN_USERNAME_LENGTH = 3

export interface ValidateUserNameOptions {
  isRequired?: boolean
  maxLength?: number
  minLength?: number
  isCustomRegex?: boolean
  customRegex?: string
  letterCase?: string
  allowSpace?: boolean
  allowAllSpecialCharacters?: boolean
  specialCharacterLocation?: string
  specialCharacters?: string[]
  validateBadWord?: boolean
}

/**
 *
 * @param value
 * @param isRequired
 * @param maxLength
 * @param minLength
 * @param isCustomRegex
 * @param allowSpace
 * @param allowAllSpecialCharacters
 * @param specialCharacters
 * @param letterCase
 * @param validateBadWord validate bad word
 *
 * @default isRequired true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 * @default minLength MIN_USERNAME_LENGTH
 * @default isCustomRegex false
 * @default allowSpace false
 * @default allowAllSpecialCharacters false
 * @default letterCase any
 * @default validateBadWord false
 */
export const validateUserName = (
  value: string,
  {
    isRequired = true,
    maxLength = MAX_DISPLAY_NAME_LENGTH,
    minLength = MIN_USERNAME_LENGTH,
    isCustomRegex,
    customRegex,
    specialCharacterLocation,
    allowSpace,
    allowAllSpecialCharacters,
    specialCharacters,
    letterCase,
    validateBadWord = false
  }: ValidateUserNameOptions = {}
) => {
  if (isRequired && isEmpty(value)) return ValidateUserNameErrorType.enum.empty

  if (isCustomRegex) {
    if (!matches(value, customRegex || REGEX_ALPHANUMERIC_WITH_HYPHEN)) {
      return ValidateUserNameErrorType.enum.invalidFormat
    }
  }

  if (!allowSpace) {
    const isSpaceFound = /\s/.test(value)
    if (isSpaceFound) return ValidateUserNameErrorType.enum.invalidFormat
  }

  if (!allowAllSpecialCharacters && specialCharacters?.length === 0) {
    const regex = REGEX_ALL_SPECIAL_CHARACTERS
    if (regex.test(value)) return ValidateUserNameErrorType.enum.invalidFormat
  }

  if (specialCharacters && specialCharacters.length > 0) {
    const hasOtherSpecialCharacter = new RegExp(REGEX_SPECIAL_CHARACTER_WITH_ALLOW_SPACE(specialCharacters, allowSpace)).test(value)
    if (hasOtherSpecialCharacter) return ValidateUserNameErrorType.enum.invalidFormat

    if (specialCharacterLocation === 'middle') {
      const regex = new RegExp(`^[${specialCharacters.join('')}]|[${specialCharacters.join('')}]$`)
      if (regex.test(value)) return ValidateUserNameErrorType.enum.invalidFormat
    }
  }

  let letterCaseRegex = REGEX_LETTER_CASE
  switch (letterCase) {
    case 'mixed':
      letterCaseRegex = REGEX_MIXED_LETTER_CASE
      break
    case 'uppercase':
      letterCaseRegex = REGEX_UPPERCASE
      break
    case 'lowercase':
      letterCaseRegex = REGEX_LOWERCASE
      break
    case 'any':
      // No letter case requirements
      break
  }

  if (letterCase !== 'any' && !letterCaseRegex.test(value)) {
    return ValidateUserNameErrorType.enum.invalidFormat
  }

  if (validateBadWord) {
    const hasBadWord = tokenizeAndValidateBadWords(value)
    if (hasBadWord) return ValidateUserNameErrorType.Enum.containsBadWords
  }

  return validateLength(value, {
    max: maxLength,
    min: minLength
  })
}
