/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { InputValidationHelper } from '@accelbyte/sdk-iam'
import { describe, expect, test } from 'vitest'
import { VALIDATIONS } from './TestConstants'

describe('getValidationDescription', () => {
  test('no matching field', () => {
    expect(InputValidationHelper.getValidationDescription('password', [])).toEqual([])
  })

  test('matching field', () => {
    expect(InputValidationHelper.getValidationDescription('username', VALIDATIONS)).toEqual([
      'Allow alphanumeric, underscores and dashes',
      'Spaces is not allowed',
      'Start and end with alphanumeric'
    ])
  })
})

describe('validateDisplayName', () => {
  test('no display name field', () => {
    expect(InputValidationHelper.validateDisplayName('', true, [])).toEqual(null)
  })

  test('display name field exists: invalid display name', () => {
    expect(InputValidationHelper.validateDisplayName('', true, VALIDATIONS)).toEqual('empty')
    expect(InputValidationHelper.validateDisplayName('a', true, VALIDATIONS)).toEqual('lessThanLengthLimit')
    expect(InputValidationHelper.validateDisplayName('forbidden', true, VALIDATIONS)).toEqual('containsForbiddenWords')
    expect(InputValidationHelper.validateDisplayName(new Array(256).fill('a').join(''), true, VALIDATIONS)).toEqual('exceedLengthLimit')
  })

  test('display name field exists: valid display name', () => {
    expect(InputValidationHelper.validateDisplayName('hello world', true, VALIDATIONS)).toEqual(null)
  })
})

describe('validateUserName', () => {
  test('no username field', () => {
    expect(InputValidationHelper.validateUserName('', [])).toEqual(null)
  })

  test('username field exists: invalid username', () => {
    expect(InputValidationHelper.validateUserName('', VALIDATIONS)).toEqual('empty')
    expect(InputValidationHelper.validateUserName('a', VALIDATIONS)).toEqual('lessThanLengthLimit')
    expect(InputValidationHelper.validateUserName('a b', VALIDATIONS)).toEqual('invalidFormat')
    expect(InputValidationHelper.validateUserName('forbidden', VALIDATIONS)).toEqual('containsForbiddenWords')
    expect(InputValidationHelper.validateUserName(new Array(256).fill('a').join(''), VALIDATIONS)).toEqual('exceedLengthLimit')
  })

  test('username field exists: valid username', () => {
    expect(InputValidationHelper.validateUserName('helloworld', VALIDATIONS)).toEqual(null)
  })
})

describe('validatePassword', () => {
  test('no password field', () => {
    expect(InputValidationHelper.validatePassword('', [])).toEqual(null)
  })

  test('password field exists: invalid password', () => {
    expect(InputValidationHelper.validatePassword('', VALIDATIONS)).toEqual('empty')
    expect(InputValidationHelper.validatePassword('a', VALIDATIONS)).toEqual('lessThanLengthLimit')
    expect(InputValidationHelper.validatePassword('abcdefghijkl', VALIDATIONS)).toEqual('invalidFormat')
    expect(InputValidationHelper.validatePassword('forbidden', VALIDATIONS)).toEqual('containsForbiddenWords')
    expect(InputValidationHelper.validatePassword(new Array(256).fill('a').join(''), VALIDATIONS)).toEqual('exceedLengthLimit')
  })

  test('password field exists: valid password', () => {
    expect(InputValidationHelper.validatePassword('Thisisagoodpassword123', VALIDATIONS)).toEqual(null)
  })
})

describe('validateEmail', () => {
  test('no email field', () => {
    expect(InputValidationHelper.validateEmail('', [])).toEqual(null)
  })

  test('email field exists: invalid email', () => {
    expect(InputValidationHelper.validateEmail('', VALIDATIONS)).toEqual('empty')
    expect(InputValidationHelper.validateEmail('a', VALIDATIONS)).toEqual('lessThanLengthLimit')
    expect(InputValidationHelper.validateEmail('abcdefghijkl', VALIDATIONS)).toEqual('invalidFormat')
    expect(InputValidationHelper.validateEmail('forbidden@hello.world', VALIDATIONS)).toEqual('containsForbiddenWords')
    expect(InputValidationHelper.validateEmail(`${new Array(256).fill('a').join('')}@hello.world`, VALIDATIONS)).toEqual(
      'exceedLengthLimit'
    )
  })

  test('email field exists: valid email', () => {
    expect(InputValidationHelper.validateEmail('sampleemail@hello.world', VALIDATIONS)).toEqual(null)
  })
})

describe('getInputValidationByKey', () => {
  test('no matching key', () => {
    expect(InputValidationHelper.getValidationByKey('email', [])).toEqual(undefined)
  })

  test('matching key', () => {
    expect(InputValidationHelper.getValidationByKey('email', VALIDATIONS)).toEqual(VALIDATIONS[0].validation)
  })
})
