/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { describe, expect, test } from 'vitest'
import { ValidateUrlErrorType, validateUrl } from './validateUrl'

describe('validateUrl', () => {
  test('valid cases', () => {
    const assertions = [
      ['mailto:demo.accelbyte.io', null],
      ['ftp://demo.accelbyte.io', null],
      ['ftps://demo.accelbyte.io', null],
      ['http://demo.accelbyte.io', null],
      ['https://demo.accelbyte.io', null],
      ['https://demo.accelbyte.io#overview', null],
      ['https://demo.accelbyte.io?test=123#overview', null],
      ['https://demo.accelbyte.io/hello/world?test=123#overview', null],
      ['https://demo.accelbyte.io/hello/world/?test=123#overview', null]
    ] as const

    for (const assertion of assertions) {
      const [url, expectedResult] = assertion
      expect(validateUrl(url), url).toBe(expectedResult)
      // The idea of this assertion is to ensure that `allowCustomProtocol: true` doesn't break successful validations.
      expect(validateUrl(url, { allowCustomProtocol: true }), url).toBe(expectedResult)
    }

    expect(validateUrl('', { isRequired: false })).toBe(null)
    expect(validateUrl('javascript:alert("test")', { allowCustomProtocol: true })).toBe(null)
    expect(validateUrl('vbscript:alert("test")', { allowCustomProtocol: true })).toBe(null)
  })

  test('invalid cases', () => {
    const assertions = [
      ['', ValidateUrlErrorType.enum.empty],
      ['javascript:alert(1)', ValidateUrlErrorType.enum.invalidFormat],
      ['vbscript:alert(1)', ValidateUrlErrorType.enum.invalidFormat],
      ['https://demo .accelbyte.io', ValidateUrlErrorType.enum.invalidFormat],
      ['https://demo{}.accelbyte.io', ValidateUrlErrorType.enum.invalidFormat],
      ['https://demo~.accelbyte.io', ValidateUrlErrorType.enum.invalidFormat],
      ['https://demo|.accelbyte.io', ValidateUrlErrorType.enum.invalidFormat],
      ['https://demo`.accelbyte.io', ValidateUrlErrorType.enum.invalidFormat],
      [new Array(2001).fill('a').join(''), ValidateUrlErrorType.enum.exceedLengthLimit]
    ] as const

    for (const assertion of assertions) {
      const [url, expectedResult] = assertion
      expect(validateUrl(url), url).toBe(expectedResult)
    }
  })
})
