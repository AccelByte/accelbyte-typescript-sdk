/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { InputValidationDataPublic } from '@accelbyte/sdk/generated-public/iam/definitions/InputValidationDataPublic'
import { ValidationDetailPublic } from '@accelbyte/sdk/generated-public/iam/definitions/ValidationDetailPublic'
import {
  validateForbiddenWords,
  ValidateForbiddenWordsErrorType,
  validateLength,
  ValidateLengthErrorType,
  validateRegex,
  ValidateRegexErrorType
} from '@accelbyte/validator'
import isEmpty from 'validator/lib/isEmpty'
import { z } from 'zod'

export const ValidateableInputField = z.enum(['username', 'displayName', 'password', 'email'])
export type ValidateableInputField = z.infer<typeof ValidateableInputField>

export class InputValidationHelper {
  static validateDisplayName = (value: string, isRequired = false, validations: InputValidationDataPublic[]) => {
    const validation = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.displayName, validations)
    if (!validation) return null
    return InputValidationHelper.validateWithRegex(value, { isRequired, validation })
  }

  static validateUserName = (value: string, validations: InputValidationDataPublic[]) => {
    const validation = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.username, validations)
    if (!validation) return null
    return InputValidationHelper.validateWithRegex(value, { validation })
  }

  static validatePassword = (value: string, validations: InputValidationDataPublic[]) => {
    const validation = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.password, validations)
    if (!validation) return null
    return InputValidationHelper.validateWithRegex(value, { validation })
  }

  static validateEmail = (value: string, validations: InputValidationDataPublic[]) => {
    const validation = InputValidationHelper.getValidationByKey(ValidateableInputField.enum.email, validations)
    if (!validation) return null
    return InputValidationHelper.validateWithRegex(value, { validation })
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
      const lastChar = message.slice(message.length - 1)
      if (lastChar === '.') {
        return message.slice(0, -1)
      }
      return message
    })
  }

  static getValidationByKey = (key: ValidateableInputField, validations: InputValidationDataPublic[]) => {
    const inputValidation = validations.find(validator => validator.field === key)
    if (!inputValidation) return
    return inputValidation.validation
  }
}
