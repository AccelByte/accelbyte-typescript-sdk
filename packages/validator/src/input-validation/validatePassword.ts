/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'
import { CommonValidationErrorType } from './constant/errorType'
import {
  REGEX_ALL_SPECIAL_CHARACTER_REPEAT,
  REGEX_ALL_SPECIAL_CHARACTERS,
  REGEX_ALPHA_NUMERIC_CHARACTER_REPEAT,
  REGEX_SPECIAL_CHARACTER_REPEAT,
  REGEX_SPECIAL_CHARACTERS
} from './constant/regex'
import { validateLength, ValidateLengthErrorType } from './validateLength'
import { validateRegex } from './validateRegex'

export const ValidatePasswordErrorType = z.enum([...ValidateLengthErrorType.options, CommonValidationErrorType.enum.invalidFormat])
export type ValidatePasswordErrorType = z.infer<typeof ValidatePasswordErrorType>

// This Default Regex is to Validate if the password contain at least 3 of following 4 types of characters: uppercase, lowercase, number, and special characters
const DEFAULT_REGEX =
  '^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[_\\W])|(?=.*[A-Z])(?=.*[0-9])(?=.*[_\\W])|(?=.*[a-z])(?=.*[0-9])(?=.*[_\\W]))(?!.*([A-Za-z0-9])\\1{2,})(?!.*([_\\W])\\2{2,})([A-Za-z0-9_\\W])[^\\s]*$'

export interface ValidatePasswordOptions {
  regex?: string
  minLength?: number
  maxLength?: number
  maxRepeatingAlphaNum?: number
  maxRepeatingSpecialCharacter?: number
  minCharType?: number
  letterCase?: string
  allowSpace?: boolean
  allowLetter?: boolean
  allowDigit?: boolean
  allowAllSpecialCharacters?: boolean
  isCustomRegex?: boolean
  allowUnicode?: boolean
  specialCharacters?: string[]
  // TODO: these 3 fields we haven't used yet.
  blockedWord?: string[]
  specialCharacterLocation?: string
  description?: {
    language: string
    message: string[]
  }
}

/**
 *
 * @param value
 * @param regex
 * @param allowUnicode (true: Allow various language character, false: only allow Alpha Numeric character)
 * @param strictlyAllowSpecialCharacters (true: allow (',. -) in the mid of value, false: Only allow Alpha Numeric)
 * @param maxLength
 * @param minLength
 * @param maxRepeatingAlphaNum
 * @param maxRepeatingSpecialCharacter
 * @param minCharType
 * @param letterCase
 * @param allowLetter
 * @param allowDigit
 * @param allowAllSpecialCharacters
 * @param isCustomRegex
 * @param specialCharacters
 *
 * @default allowUnicode false
 * @default strictlyAllowSpecialCharacters true
 * @default maxLength MAX_DISPLAY_NAME_LENGTH
 * @default minLength MIN_DISPLAY_NAME_LENGTH
 */
export const validatePassword = (
  value: string,
  {
    regex = DEFAULT_REGEX,
    minLength = 8,
    maxLength = 64,
    maxRepeatingAlphaNum = 2,
    maxRepeatingSpecialCharacter = 2,
    minCharType = 3,
    letterCase = 'mixed',
    allowSpace = false,
    allowLetter = true,
    allowDigit = true,
    allowAllSpecialCharacters = true,
    isCustomRegex = false,
    allowUnicode = false,
    specialCharacters = []
  }: ValidatePasswordOptions = {}
) => {
  const lengthValidationResult = validateLength(value, {
    max: maxLength,
    min: minLength
  })
  if (lengthValidationResult) return lengthValidationResult

  if (isCustomRegex) {
    return validateRegex(value, regex, {
      allowUnicode: allowUnicode || isCustomRegex
    })
  } else {
    if (maxRepeatingAlphaNum > 0) {
      const regex = new RegExp(REGEX_ALPHA_NUMERIC_CHARACTER_REPEAT(maxRepeatingAlphaNum), 'g')
      if (regex.test(value)) return ValidatePasswordErrorType.enum.invalidFormat
    }

    if (!allowAllSpecialCharacters && specialCharacters.length === 0) {
      const regex = new RegExp(REGEX_ALL_SPECIAL_CHARACTERS, 'g')
      if (regex.test(value)) return ValidatePasswordErrorType.enum.invalidFormat
    }
    if (specialCharacters.length > 0) {
      const regex = new RegExp(REGEX_SPECIAL_CHARACTERS(specialCharacters), 'g')
      if (regex.test(value)) return ValidatePasswordErrorType.enum.invalidFormat
    }

    let charTypeCount = 0
    if (allowLetter && /[a-z]/.test(value)) charTypeCount++
    if (allowLetter && /[A-Z]/.test(value)) charTypeCount++
    if (allowDigit && /\d/.test(value)) charTypeCount++
    if (allowAllSpecialCharacters && /[^\w\s]/.test(value)) {
      const regex = new RegExp(REGEX_ALL_SPECIAL_CHARACTER_REPEAT(maxRepeatingSpecialCharacter), 'g')
      if (regex.test(value)) {
        return ValidatePasswordErrorType.enum.invalidFormat
      }

      charTypeCount++
    }
    if (!allowAllSpecialCharacters && specialCharacters.length > 0) {
      const regex = new RegExp(REGEX_SPECIAL_CHARACTER_REPEAT(specialCharacters, maxRepeatingSpecialCharacter), 'g')
      if (regex.test(value)) {
        return ValidatePasswordErrorType.enum.invalidFormat
      }

      charTypeCount++
    }
    if (charTypeCount < minCharType) {
      return ValidatePasswordErrorType.enum.invalidFormat
    }

    if (!allowSpace) {
      const isSpaceFound = /\s/.test(value)
      if (isSpaceFound) return ValidatePasswordErrorType.enum.invalidFormat
    }

    if (letterCase === 'lowercase' && value.toLowerCase() !== value) {
      return ValidatePasswordErrorType.enum.invalidFormat
    }
    if (letterCase === 'uppercase' && value.toUpperCase() !== value) {
      return ValidatePasswordErrorType.enum.invalidFormat
    }
  }

  return null
}
