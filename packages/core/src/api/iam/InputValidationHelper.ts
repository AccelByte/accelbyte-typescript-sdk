/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { InputValidationDataPublic } from '@od-web-sdk/generated-public/iam/definitions/InputValidationDataPublic'
import { ValidationDetailPublic } from '@od-web-sdk/generated-public/iam/definitions/ValidationDetailPublic'
import {
  CharacterLocationType,
  generatePattern,
  LetterCaseType,
  RegexGeneratorParam,
  validateForbiddenWords,
  ValidateForbiddenWordsErrorType,
  validateLength,
  ValidateLengthErrorType,
  validateRegex,
  ValidateRegexErrorType
} from 'justice-js-common-utils'
import { isEmpty } from 'validator'
import { z } from 'zod'

export const ValidateableInputField = z.enum(['username', 'displayName', 'password', 'email'])
export type ValidateableInputField = z.infer<typeof ValidateableInputField>

export class InputValidationHelper {
  static getValidateDescription(key: ValidateableInputField, validations: InputValidationDataPublic[]) {
    const field = validations.find(validation => validation.field === key)
    if (!field) return []
    return field.validation.description.message.map(message => {
      const lastChar = message.slice(message.length - 1)
      if (lastChar === '.') {
        return message.slice(0, -1)
      }
      return message
    })
  }

  static validateDisplayName = (value: string, isRequired = false, validations: InputValidationDataPublic[]) => {
    const validation = InputValidationHelper.getInputValidationByKey(ValidateableInputField.enum.displayName, validations)
    if (!validation) return null
    return InputValidationHelper.validateWithRegex(value, { isRequired, validation })
  }

  static validateUserName = (value: string, validations: InputValidationDataPublic[]) => {
    const validation = InputValidationHelper.getInputValidationByKey(ValidateableInputField.enum.username, validations)
    if (!validation) return null
    return InputValidationHelper.validateWithRegex(value, { validation })
  }

  static validatePassword = (value: string, validations: InputValidationDataPublic[]) => {
    const validation = InputValidationHelper.getInputValidationByKey(ValidateableInputField.enum.password, validations)
    if (!validation) return null
    return InputValidationHelper.validateWithRegex(value, { validation })
  }

  static validateEmail = (value: string, validations: InputValidationDataPublic[]) => {
    const validation = InputValidationHelper.getInputValidationByKey(ValidateableInputField.enum.email, validations)
    if (!validation) return null
    return InputValidationHelper.validateWithRegex(value, { validation })
  }

  static getInputValidationByKey = (key: ValidateableInputField, validations: InputValidationDataPublic[]) => {
    const inputValidation = validations.find(validator => validator.field === key)
    if (!inputValidation) return
    return inputValidation.validation
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
        result = validation.specialCharacterLocation === 'middle' ? ValidateRegexErrorType.invalidFormat : null
      }

      if (!result && !validation.allowSpace) {
        const isSpaceFound = /\s/.test(value)
        result = isSpaceFound ? ValidateRegexErrorType.invalidFormat : null
      }
    }

    if (!result) {
      result = validateRegex(value, generatePattern(this.getFormattedValidation(validation)), {
        allowUnicode: validation.allowUnicode || validation.isCustomRegex
      })
    }

    return result
  }

  static getFormattedValidation = (validation: ValidationDetailPublic): RegexGeneratorParam => {
    const { letterCase, specialCharacterLocation, ...data } = validation
    return {
      ...data,
      letterCase: letterCase as LetterCaseType,
      specialCharacterLocation: specialCharacterLocation as CharacterLocationType
    }
  }
}
