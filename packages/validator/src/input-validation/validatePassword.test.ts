/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { describe, expect, test } from 'vitest'
import { ValidatePasswordErrorType, ValidatePasswordOptions, validatePassword } from './validatePassword'

const DEFAULT_VALIDATIONS: ValidatePasswordOptions = {
  blockedWord: [],
  regex:
    '^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[_\\W])|(?=.*[A-Z])(?=.*[0-9])(?=.*[_\\W])|(?=.*[a-z])(?=.*[0-9])(?=.*[_\\W]))(?!.*([A-Za-z0-9])\\1{2,})(?!.*([_\\W])\\2{2,})([A-Za-z0-9_\\W])[^\\s]*$',
  minLength: 8,
  maxLength: 32,
  maxRepeatingAlphaNum: 2,
  maxRepeatingSpecialCharacter: 2,
  minCharType: 3,
  letterCase: 'mixed',
  specialCharacterLocation: 'anywhere',
  allowLetter: true,
  allowDigit: true,
  allowSpace: false,
  allowUnicode: false,
  allowAllSpecialCharacters: true,
  isCustomRegex: false,
  specialCharacters: [],
  description: {
    language: 'en-US',
    message: [
      'Your password must contain between 8 to 32 characters',
      'Contain at least 3 of following 4 types of characters: uppercase letters, lowercase letters, numbers, special characters',
      'No more than 2 equal characters in a row'
    ]
  }
}

describe('validatePassword', () => {
  test('valid cases', () => {
    const assertions: Array<[string, ValidatePasswordOptions | undefined, null]> = [
      ['Helloworld1!', undefined, null],
      ['Helloworld1!!', undefined, null],
      ['Helloworld12!!', undefined, null],
      ['Helloworld12+\\', undefined, null],
      ['helloworld1W!', undefined, null],
      ['helloworld12Z!', undefined, null],
      ['helloworld12Z++', { allowAllSpecialCharacters: false, specialCharacters: ['+'] }, null],
      ['helloworld12Z+++++', { maxRepeatingSpecialCharacter: 5, allowAllSpecialCharacters: false, specialCharacters: ['+'] }, null],
      ['Helloworld123!!!!!', { maxRepeatingSpecialCharacter: 5 }, null],
      ['helloworld 12Z', { allowSpace: true }, null],
      ['helloworld', { minCharType: 1 }, null],
      ['Heeeeelloworld123!!', { maxRepeatingAlphaNum: 5 }, null]
    ]

    for (const assertion of assertions) {
      const [password, validationsOverride, expectedResult] = assertion
      const validations = { ...DEFAULT_VALIDATIONS, ...validationsOverride }

      expect(validatePassword(password, validations), password).toBe(expectedResult)
    }
  })

  test('invalid cases', () => {
    const assertions: Array<[string, ValidatePasswordOptions | undefined, string | undefined]> = [
      ['helloworld', undefined, undefined],
      ['Helloworld1!!!', undefined, undefined],
      ['helloworld12Z++', { allowAllSpecialCharacters: false, specialCharacters: ['!'] }, undefined],
      ['helloworld12Z+++', { allowAllSpecialCharacters: false, specialCharacters: ['+'], maxRepeatingSpecialCharacter: 2 }, undefined],
      ['helloworld 12Z', { allowSpace: false }, undefined],
      ['World', { minLength: 6 }, ValidatePasswordErrorType.enum.lessThanLengthLimit],
      ['HelloWorld1!', { minLength: 0, maxLength: 6 }, ValidatePasswordErrorType.enum.exceedLengthLimit],
      ['Helloworld123!!!!!', { maxRepeatingSpecialCharacter: 4 }, ValidatePasswordErrorType.enum.invalidFormat],
      ['Heeeeelloworld123!!', { maxRepeatingAlphaNum: 4 }, ValidatePasswordErrorType.enum.invalidFormat]
    ]

    for (const assertion of assertions) {
      const [password, validationsOverride, expectedResult = ValidatePasswordErrorType.enum.invalidFormat] = assertion
      const validations = { ...DEFAULT_VALIDATIONS, ...validationsOverride }

      expect(validatePassword(password, validations), password).toBe(expectedResult)
    }
  })
})
