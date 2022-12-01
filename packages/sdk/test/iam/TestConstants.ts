/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { InputValidationDataPublic } from '@accelbyte/sdk/generated-public/iam/definitions/InputValidationDataPublic'
import { UserResponseV3 } from '@accelbyte/sdk/generated-public/iam/definitions/UserResponseV3'
import { TEST_NAMESPACE } from '../test-utils'

export const USER: UserResponseV3 = {
  authType: 'email',
  bans: [],
  country: '',
  createdAt: '',
  dateOfBirth: '',
  deletionStatus: false,
  displayName: '',
  emailAddress: '',
  emailVerified: false,
  enabled: true,
  lastDateOfBirthChangedTime: '',
  lastEnabledChangedTime: '',
  namespace: TEST_NAMESPACE,
  oldEmailAddress: '',
  permissions: [],
  phoneVerified: false,
  roles: [],
  userId: ''
}

export const VALIDATIONS: InputValidationDataPublic[] = [
  {
    field: 'email',
    validation: {
      blockedWord: ['forbidden'],
      regex: '^[a-zA-Z0-9_+\u0026*-]+(?:\\.[a-zA-Z0-9_+\u0026*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,15}$',
      minLength: 3,
      maxLength: 256,
      maxRepeatingAlphaNum: 10,
      maxRepeatingSpecialCharacter: 5,
      minCharType: 0,
      letterCase: 'any',
      specialCharacterLocation: 'middle',
      allowLetter: true,
      allowDigit: true,
      allowSpace: false,
      allowUnicode: false,
      allowAllSpecialCharacters: false,
      isCustomRegex: true,
      specialCharacters: ['@', '.', '+', '_', '-', '\u0026', '*'],
      description: {
        language: 'en-US',
        message: [
          'Your email address can only contain alphanumeric, at, dot, underscores, dashes. plus, ampersand, and wildcard',
          'Should start and end with alphanumeric.'
        ]
      }
    }
  },
  {
    field: 'username',
    validation: {
      blockedWord: ['forbidden'],
      regex: '^[^\\W_-][\\w-]+[^\\W_-]$',
      minLength: 3,
      maxLength: 48,
      maxRepeatingAlphaNum: 0,
      maxRepeatingSpecialCharacter: 0,
      minCharType: 0,
      letterCase: 'any',
      specialCharacterLocation: 'middle',
      allowLetter: true,
      allowDigit: true,
      allowSpace: false,
      allowUnicode: false,
      allowAllSpecialCharacters: false,
      isCustomRegex: false,
      specialCharacters: ['_', '-'],
      description: {
        language: 'en-US',
        message: ['Allow alphanumeric, underscores and dashes.', 'Spaces is not allowed.', 'Start and end with alphanumeric.']
      }
    }
  },
  {
    field: 'displayName',
    validation: {
      blockedWord: ['forbidden'],
      regex: "^[a-zA-Z0-9]+(([',. -][a-zA-Z0-9])?[a-zA-Z0-9]*)*$",
      minLength: 3,
      maxLength: 48,
      maxRepeatingAlphaNum: 0,
      maxRepeatingSpecialCharacter: 1,
      minCharType: 0,
      letterCase: 'any',
      specialCharacterLocation: 'middle',
      allowLetter: true,
      allowDigit: true,
      allowSpace: true,
      allowUnicode: false,
      allowAllSpecialCharacters: false,
      isCustomRegex: false,
      specialCharacters: ["'", ',', '.', '-'],
      description: {
        language: 'en-US',
        message: [
          'Your display name can only contain uppercase and lowercase letters, spaces, special characters',
          'Should start and end with alphanumeric.'
        ]
      }
    }
  },
  {
    field: 'password',
    validation: {
      blockedWord: ['forbidden'],
      regex:
        '^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[_\\W])|(?=.*[A-Z])(?=.*[0-9])(?=.*[_\\W])|(?=.*[a-z])(?=.*[0-9])(?=.*[_\\W]))(?!.*([A-Za-z0-9])\\1{2,})([A-Za-z0-9\\[_\\W\\]])*$',
      minLength: 8,
      maxLength: 64,
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
          'Your password must contain between 8 to 64 characters',
          'Contain at least 3 of following 4 types of characters: uppercase letters, lowercase letters, numbers, special characters',
          'No more than 2 equal characters in a row'
        ]
      }
    }
  }
]
