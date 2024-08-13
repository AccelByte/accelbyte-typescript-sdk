/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import {
  validateDisplayName,
  validateEmail,
  validateForbiddenWords,
  ValidateForbiddenWordsErrorType,
  validateLength,
  ValidateLengthErrorType,
  validateNotEmpty,
  validatePassword,
  validateRegex,
  ValidateRegexErrorType,
  validateUserName
} from '@accelbyte/validator'
import isEmpty from 'validator/lib/isEmpty.js'
import { z } from 'zod'
import { InputValidationDataPublic } from '../../generated-definitions/InputValidationDataPublic'
import { ValidationDetailPublic } from '../../generated-definitions/ValidationDetailPublic'

export const ValidateableInputField = z.enum(['username', 'displayName', 'password', 'email', 'dateOfBirth'])
export type ValidateableInputField = z.infer<typeof ValidateableInputField>

export class InputValidationHelper {
  static validateDisplayName = (value: string, isRequired = false, validations: InputValidationDataPublic[], validateBadWord = false) => {
    const validation = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.displayName, validations)
    if (!validation) return null

    return validateDisplayName(value, {
      // @ts-ignore  Why? -> error TS2345: Argument of type '{ blockedWord: string[]; maxLength: number; minLength: number; isRequired: boolean; allowUnicode: boolean; isCustomRegex: boolean; allowSpace: boolean; customRegex: string; letterCase: string; ... 4 more ...; validateBadWord: boolean; }' is not assignable to parameter of type 'ValidateDisplayNameOptions'.
      blockedWord: validation.blockedWord,
      maxLength: validation.maxLength,
      minLength: validation.minLength,
      isRequired,
      allowUnicode: validation.allowUnicode,
      isCustomRegex: validation.isCustomRegex,
      allowSpace: validation.allowSpace,
      customRegex: validation.regex,
      letterCase: validation.letterCase,
      allowAllSpecialCharacters: validation.allowAllSpecialCharacters,
      specialCharacters: validation.specialCharacters,
      maxRepeatingSpecialCharacter: validation.maxRepeatingSpecialCharacter,
      specialCharacterLocation: validation.specialCharacterLocation,
      validateBadWord
    })
  }

  static validateUserName = (value: string, validations: InputValidationDataPublic[], validateBadWord = false) => {
    const validation = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.username, validations)
    if (!validation) return null
    return validateUserName(value, {
      maxLength: validation.maxLength,
      minLength: validation.minLength,
      isCustomRegex: validation.isCustomRegex,
      customRegex: validation.regex,
      letterCase: validation.letterCase,
      allowSpace: validation.allowSpace,
      allowAllSpecialCharacters: validation.allowAllSpecialCharacters,
      specialCharacters: validation.specialCharacters,
      specialCharacterLocation: validation.specialCharacterLocation,
      validateBadWord
    })
  }

  static validateDateOfBirth = (value: string, validations: InputValidationDataPublic[]) => {
    const validation = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.dateOfBirth, validations)
    if (!validation) return null
    return validateNotEmpty(value)
  }

  static validatePassword = (value: string, validations: InputValidationDataPublic[]) => {
    const validation = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.password, validations)
    if (!validation) return null
    return validatePassword(value, {
      regex: validation.regex,
      minLength: validation.minLength,
      maxLength: validation.maxLength,
      maxRepeatingAlphaNum: validation.maxRepeatingAlphaNum,
      maxRepeatingSpecialCharacter: validation.maxRepeatingSpecialCharacter,
      minCharType: validation.minCharType,
      letterCase: validation.letterCase,
      allowSpace: validation.allowSpace,
      allowLetter: validation.allowLetter,
      allowDigit: validation.allowDigit,
      allowAllSpecialCharacters: validation.allowAllSpecialCharacters,
      isCustomRegex: validation.isCustomRegex,
      specialCharacters: validation.specialCharacters
    })
  }

  static validateEmail = (value: string, validations: InputValidationDataPublic[]) => {
    const validation = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.email, validations)
    if (!validation) return null
    return validateEmail(value, {
      blockedWord: validation.blockedWord,
      customRegex: validation.regex,
      maxLength: validation.maxLength,
      minLength: validation.minLength,
      isRequired: true
    })
  }

  static validateWithRegex = (
    value: string,
    { validation, isRequired = true }: { validation: ValidationDetailPublic; isRequired?: boolean }
  ) => {
    let result: ValidateRegexErrorType | ValidateLengthErrorType | ValidateForbiddenWordsErrorType | null
    if (isEmpty(value) && !isRequired) return null

    result = validateLength(value, { min: validation.minLength, max: validation.maxLength })

    if (!result) {
      result = validateForbiddenWords(value, validation.blockedWord || [])
    }

    if (!result && !validation.isCustomRegex) {
      const lastCharacter = value.slice(-1)
      const isLastCharacterSpecial = /[^a-zA-Z0-9]/.test(lastCharacter)
      if (isLastCharacterSpecial && value.length > 1) {
        result = validation.specialCharacterLocation === 'middle' ? ValidateRegexErrorType.enum.invalidFormat : null
      }

      if (!result && !validation.allowSpace) {
        const isSpaceFound = /\s/.test(value)
        result = isSpaceFound ? ValidateRegexErrorType.enum.invalidFormat : null
      }
    }

    if (!result) {
      result = validateRegex(value, validation.regex, {
        allowUnicode: validation.allowUnicode || validation.isCustomRegex
      })
    }

    return result
  }

  static getValidationDescription(key: ValidateableInputField, validations: InputValidationDataPublic[]) {
    const field = validations.find(validation => validation.field === key)
    if (!field) return []
    return field.validation.description.message.map(message => {
      const trimmedMessage = message.trim()
      const lastChar = trimmedMessage.slice(trimmedMessage.length - 1)
      if (lastChar === '.') {
        return trimmedMessage.slice(0, -1)
      }
      return trimmedMessage
    })
  }

  static getValidationByKey = (key: ValidateableInputField, validations: InputValidationDataPublic[]) => {
    const inputValidation = validations.find(validator => validator.field === key)
    if (!inputValidation) return
    return inputValidation.validation
  }

  // format blocked word to string
  static formatBlockedWord = (value: string, blockedWord: string[]) => {
    const blockedWordList = blockedWord
      .map(word => {
        const lowercaseWord = word.toLowerCase()
        return value.toLocaleLowerCase().includes(lowercaseWord) ? lowercaseWord : ''
      })
      .filter(Boolean)
    const wordList = [...blockedWordList]
    const last = wordList.pop()
    return wordList.length ? `${wordList.join(', ')} or ${last}` : last
  }
}
