/*
 * Copyright (c) 2019-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import isEmpty from 'validator/lib/isEmpty.js'
import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import { MAX_DISPLAY_NAME_LENGTH, MIN_DISPLAY_NAME_LENGTH } from './constant/numbers'
import { validateLength, ValidateLengthErrorType } from './validateLength'
import { validateRegex } from './validateRegex'
import {
  REGEX_ALLOW_UNICODE,
  REGEX_LETTER_CASE,
  REGEX_LOWERCASE,
  REGEX_MIXED_LETTER_CASE,
  REGEX_SPECIAL_CHARACTERS_AND_UNICODE,
  REGEX_ALL_SPECIAL_CHARACTERS,
  REGEX_START_OR_END_WITH_SPECIAL_CHARACTER,
  REGEX_START_OR_END_WITH_SPECIAL_CHARACTER_NOT_UNICODE,
  REGEX_UPPERCASE,
  REGEX_ALL_SPECIAL_CHARACTER_REPEAT,
  REGEX_SPECIAL_CHARACTER_REPEAT
} from './constant/regex'
import { ValidateBadWordsErrorType, tokenizeAndValidateBadWords } from './validateBadWords'
import { validateForbiddenWords } from './validateForbiddenWords'

export const ValidateDisplayNameErrorType = z.enum([
  ...ValidateLengthErrorType.options,
  CommonValidationErrorType.enum.invalidFormat,
  ValidateBadWordsErrorType.enum.containsBadWords,
  CommonValidationErrorType.enum.containsForbiddenWords
])
export type ValidateDisplayNameErrorType = z.infer<typeof ValidateDisplayNameErrorType>

export interface ValidateDisplayNameOptions {
  blockedWord?: string[]
  allowUnicode?: boolean
  isRequired?: boolean
  maxLength?: number
  minLength?: number
  isCustomRegex?: boolean
  customRegex?: string
  letterCase?: string
  allowSpace?: boolean
  allowAllSpecialCharacters?: boolean
  specialCharacterLocation?: string
  maxRepeatingSpecialCharacter?: number
  specialCharacters?: string[]
  validateBadWord?: boolean
}

/**
 *
 * @param value
 * @param allowUnicode (true: Allow various language character, false: only allow Alpha Numeric character)
 * @param isRequired
 * @param maxLength
 * @param minLength
 * @param isCustomRegex
 * @param letterCase
 * @param allowSpace
 * @param allowAllSpecialCharacters
 * @param specialCharacterLocation
 * @param maxRepeatingSpecialCharacter
 * @param specialCharacters
 * @param validateBadWord validate bad word
 *
 * @default allowUnicode false
 * @default isRequired true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH = 48
 * @default minLength MIN_DISPLAY_NAME_LENGTH = 3
 * @default specialCharacterLocation middle
 * @default maxRepeatingSpecialCharacter 1
 * @default allowSpace true
 * @default specialCharacters ["\'", "\,", "\.", "\-"]
 * @default letterCase any
 * @default validateBadWord false
 */
export const validateDisplayName = (
  value: string,
  {
    blockedWord = [],
    allowUnicode = false,
    isRequired = true,
    maxLength = MAX_DISPLAY_NAME_LENGTH,
    minLength = MIN_DISPLAY_NAME_LENGTH,
    isCustomRegex = false,
    customRegex = '',
    specialCharacterLocation = 'middle',
    allowSpace = true,
    allowAllSpecialCharacters,
    maxRepeatingSpecialCharacter = 1,
    // prettier-ignore
    // eslint-disable-next-line
    specialCharacters = ["\'", "\,", "\.", "\-"],
    letterCase = 'any',
    validateBadWord = false
  }: ValidateDisplayNameOptions = {}
) => {
  if (isEmpty(value)) {
    if (!isRequired) {
      return null
    }
    return ValidateDisplayNameErrorType.enum.empty
  }

  if (isCustomRegex)
    return validateRegex(value, customRegex, {
      allowUnicode: allowUnicode || isCustomRegex
    })

  if (!allowSpace) {
    const isSpaceFound = /\s/.test(value)
    if (isSpaceFound) return ValidateDisplayNameErrorType.enum.invalidFormat
  } else {
    const isRepeatOrNotInMiddleSpaceFound = /^\s|\s$|\s{2,}/.test(value)
    if (isRepeatOrNotInMiddleSpaceFound) return ValidateDisplayNameErrorType.enum.invalidFormat
  }

  if (!allowUnicode) {
    const regex = REGEX_ALLOW_UNICODE
    if (regex.test(value)) return ValidateDisplayNameErrorType.enum.invalidFormat
  }

  if (allowAllSpecialCharacters && specialCharacterLocation === 'middle') {
    const regex = allowUnicode ? REGEX_START_OR_END_WITH_SPECIAL_CHARACTER_NOT_UNICODE : REGEX_START_OR_END_WITH_SPECIAL_CHARACTER
    if (regex.test(value)) return ValidateDisplayNameErrorType.enum.invalidFormat

    if (maxRepeatingSpecialCharacter) {
      const hasInvalidRepeatSpecialCharacter = new RegExp(REGEX_ALL_SPECIAL_CHARACTER_REPEAT(maxRepeatingSpecialCharacter), 'g')
      if (hasInvalidRepeatSpecialCharacter.test(value)) return ValidateDisplayNameErrorType.enum.invalidFormat
    }
  }

  if (!allowAllSpecialCharacters && specialCharacters?.length === 0) {
    const regex = allowUnicode ? REGEX_SPECIAL_CHARACTERS_AND_UNICODE : REGEX_ALL_SPECIAL_CHARACTERS
    if (regex.test(value)) return ValidateDisplayNameErrorType.enum.invalidFormat
  }

  if (specialCharacters && specialCharacters.length > 0) {
    const specialCharacterPattern = `[^a-zA-Z0-9${allowUnicode ? '\u007e-\uFFFF$' : ''}${specialCharacters.join('')}${
      allowSpace ? '\\s' : ''
    }]`
    const hasOtherSpecialCharacter = new RegExp(specialCharacterPattern).test(value)

    if (hasOtherSpecialCharacter) return ValidateDisplayNameErrorType.enum.invalidFormat

    if (specialCharacterLocation === 'middle') {
      const regex = new RegExp(`^[${specialCharacters?.join('')}]|[${specialCharacters?.join('')}]$`)
      if (regex.test(value)) return ValidateDisplayNameErrorType.enum.invalidFormat
    }

    if (maxRepeatingSpecialCharacter && specialCharacters.length > 0) {
      const hasInvalidRepeatSpecialCharacter = new RegExp(
        REGEX_SPECIAL_CHARACTER_REPEAT(specialCharacters, maxRepeatingSpecialCharacter),
        'g'
      )
      if (hasInvalidRepeatSpecialCharacter.test(value)) return ValidateDisplayNameErrorType.enum.invalidFormat
    }

    if (allowAllSpecialCharacters && maxRepeatingSpecialCharacter) {
      const hasInvalidRepeatSpecialCharacter = new RegExp(REGEX_ALL_SPECIAL_CHARACTER_REPEAT(maxRepeatingSpecialCharacter), 'g')
      if (hasInvalidRepeatSpecialCharacter.test(value)) return ValidateDisplayNameErrorType.enum.invalidFormat
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

  if (letterCase !== 'any' && !letterCaseRegex.test(value)) return ValidateDisplayNameErrorType.enum.invalidFormat

  if (blockedWord.length > 0) {
    if (validateForbiddenWords(value, blockedWord)) return ValidateDisplayNameErrorType.enum.containsForbiddenWords
  }

  if (validateBadWord) {
    const hasBadWord = tokenizeAndValidateBadWords(value)
    if (hasBadWord) return ValidateDisplayNameErrorType.Enum.containsBadWords
  }

  return validateLength(value, {
    max: maxLength,
    min: minLength
  })
}
