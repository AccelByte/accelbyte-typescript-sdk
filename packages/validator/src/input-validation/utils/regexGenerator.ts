/*
 *
 *  Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 *  This is licensed software from AccelByte Inc, for limitations
 *  and restrictions contact your company contract manager.
 *
 */

import { z } from 'zod'

export const LetterCaseEnum = z.enum(['lowercase', 'uppercase', 'mixed', 'any'])
export type LetterCaseType = z.infer<typeof LetterCaseEnum>
export const CharacterLocationEnum = z.enum(['anywhere', 'middle'])
export type CharacterLocationType = z.infer<typeof CharacterLocationEnum>

const UNICODE_PATTERN = '^[\\pL\\pN\\pM]*$'
const NUMBER_PATTERN = '0-9'
const LOWERCASE_PATTERN = 'a-z'
const UPPERCASE_PATTERN = 'A-Z'
const ANYCASE_PATTERN = 'A-Za-z'
export const DEFAULT_USERNAME_RULE = {
  regex: '()',
  maxRepeatingAlphaNum: 0,
  maxRepeatingSpecialCharacter: 0,
  minCharType: 0,
  letterCase: LetterCaseEnum.enum.any,
  specialCharacterLocation: CharacterLocationEnum.enum.middle,
  allowUnicode: false,
  allowLetter: true,
  allowDigit: true,
  allowSpace: false,
  allowAllSpecialCharacters: false,
  isCustomRegex: false,
  specialCharacters: ['_', '-'],
  blockedWord: []
}
export const DEFAULT_DISPLAYNAME_RULE = {
  regex: '()',
  maxRepeatingAlphaNum: 0,
  maxRepeatingSpecialCharacter: 1,
  minCharType: 0,
  letterCase: LetterCaseEnum.enum.any,
  specialCharacterLocation: CharacterLocationEnum.enum.middle,
  allowUnicode: false,
  allowLetter: true,
  allowDigit: true,
  allowSpace: true,
  allowAllSpecialCharacters: false,
  isCustomRegex: false,
  specialCharacters: ["'", ',', '.', '-'],
  blockedWord: []
}
export const DEFAULT_PASSWORD_RULE = {
  regex: '()',
  maxRepeatingAlphaNum: 2,
  maxRepeatingSpecialCharacter: 2,
  minCharType: 3,
  letterCase: LetterCaseEnum.enum.mixed,
  specialCharacterLocation: CharacterLocationEnum.enum.anywhere,
  allowUnicode: false,
  allowLetter: true,
  allowDigit: true,
  allowSpace: false,
  allowAllSpecialCharacters: true,
  isCustomRegex: false,
  blockedWord: [],
  specialCharacters: [
    '!',
    '~',
    '<',
    '>',
    ',',
    ';',
    ':',
    '_',
    '=',
    '?',
    '*',
    '+',
    '#',
    '.',
    '"',
    '&',
    '§',
    '%',
    '°',
    '(',
    ')',
    '\\|',
    '\\[',
    '\\]',
    '\\-',
    '\\$',
    '\\^',
    '\\@',
    '\\/',
    '\\\\',
    '\\`',
    "\\'",
    '\\{',
    '\\}'
  ]
}
export const DEFAULT_EMAIL_RULE = {
  regex: '()',
  maxRepeatingAlphaNum: 10,
  maxRepeatingSpecialCharacter: 5,
  minCharType: 0,
  letterCase: LetterCaseEnum.enum.any,
  specialCharacterLocation: CharacterLocationEnum.enum.middle,
  allowUnicode: false,
  allowLetter: true,
  allowDigit: true,
  allowSpace: false,
  allowAllSpecialCharacters: false,
  isCustomRegex: false,
  specialCharacters: ['@', '.', '+', '_', '-'],
  blockedWord: []
}

export const EMAIL_DOMAIN_REGEX = '^(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,15}$'

export interface RegexGeneratorParam {
  regex: string
  maxRepeatingAlphaNum: number
  maxRepeatingSpecialCharacter: number
  minCharType: number
  letterCase: string
  specialCharacterLocation: string
  allowUnicode: boolean
  allowLetter: boolean
  allowDigit: boolean
  allowSpace: boolean
  allowAllSpecialCharacters?: boolean
  isCustomRegex: boolean
  specialCharacters: string[]
}

export const generatePattern = ({
  regex,
  maxRepeatingAlphaNum,
  maxRepeatingSpecialCharacter,
  minCharType,
  letterCase,
  specialCharacterLocation,
  allowUnicode,
  allowLetter,
  allowDigit,
  allowSpace,
  allowAllSpecialCharacters,
  isCustomRegex,
  specialCharacters
}: RegexGeneratorParam): string => {
  if (isCustomRegex) {
    return regex
  }
  if (allowUnicode) {
    return UNICODE_PATTERN
  }

  let allowedCharacterList: string[] = []
  let allowedCharacterString = ''

  if (allowLetter) {
    switch (letterCase) {
      case LetterCaseEnum.enum.uppercase:
        allowedCharacterString += UPPERCASE_PATTERN
        allowedCharacterList = [...allowedCharacterList, createPositiveLookahead(UPPERCASE_PATTERN)]
        break
      case LetterCaseEnum.enum.lowercase:
        allowedCharacterString += LOWERCASE_PATTERN
        allowedCharacterList = [...allowedCharacterList, createPositiveLookahead(LOWERCASE_PATTERN)]
        break
      case LetterCaseEnum.enum.mixed:
        allowedCharacterString += UPPERCASE_PATTERN
        allowedCharacterString += LOWERCASE_PATTERN
        allowedCharacterList = [
          ...allowedCharacterList,
          createPositiveLookahead(UPPERCASE_PATTERN),
          createPositiveLookahead(LOWERCASE_PATTERN)
        ]
        break
      case LetterCaseEnum.enum.any:
        allowedCharacterString += ANYCASE_PATTERN
        allowedCharacterList = [...allowedCharacterList, createPositiveLookahead(ANYCASE_PATTERN)]
        break
      default:
        allowedCharacterString += ''
    }
  }

  if (allowDigit) {
    allowedCharacterString += NUMBER_PATTERN
    allowedCharacterList = [...allowedCharacterList, createPositiveLookahead(NUMBER_PATTERN)]
  }

  let specialChars = ''
  let allowedSpecialChars = ''

  if (allowAllSpecialCharacters) {
    specialChars = '_\\W'
    specialCharacters = [specialChars]
  }

  if (specialCharacters.length > 0) {
    specialChars = specialCharacters.join('')
    let quantifier = '*'
    if (maxRepeatingSpecialCharacter === 1) {
      quantifier = '?'
    }

    switch (specialCharacterLocation) {
      case CharacterLocationEnum.enum.anywhere:
        allowedCharacterString += specialChars
        break
      case CharacterLocationEnum.enum.middle:
        allowedSpecialChars = createCharacterSet(specialChars) + quantifier
        break
      default:
        allowedCharacterString += specialChars
    }

    allowedCharacterList = [...allowedCharacterList, createPositiveLookahead(specialChars)]
  }

  allowedCharacterString = createCharacterSet(allowedCharacterString)

  const combinations = createCombination(allowedCharacterList, minCharType)
  let result = '^'

  if (combinations.length > 0) {
    result += createNonCapturingGroup(combinations.join('|'))
  }

  let capturingGroupNum = 1
  if (allowedCharacterString !== '') {
    if (maxRepeatingAlphaNum > 0) {
      result += `(?!.*([A-Za-z0-9])\\${capturingGroupNum.toString()}{${maxRepeatingAlphaNum.toString()},})`
      capturingGroupNum++
    }

    if (allowSpace) {
      // tslint:disable-next-line:prefer-conditional-expression
      if (!allowedSpecialChars) {
        allowedSpecialChars = `${createCharacterSet(' ')}?`
      } else {
        allowedSpecialChars = createCharacterSet(' ') + '?' + '|' + allowedSpecialChars
      }
    }
  }

  let allowedChars = allowedCharacterString
  if (allowedSpecialChars) {
    if (allowedCharacterString !== '') {
      allowedChars += `${createCapturingGroup(allowedSpecialChars)}?`
      allowedChars += `${allowedCharacterString}+|${allowedCharacterString}`
    } else {
      allowedChars += allowedSpecialChars
    }
  }

  if (maxRepeatingSpecialCharacter > 0 && specialCharacters.length > 0) {
    const specials = specialCharacters.join('')
    if (allowAllSpecialCharacters) {
      result += `(?!.*([_\\W])\\${capturingGroupNum.toString()}{${maxRepeatingSpecialCharacter.toString()},})`
    } else {
      result += `(?!.*([${specials}])\\${capturingGroupNum.toString()}{${maxRepeatingSpecialCharacter.toString()},})`
    }
  }

  result += createCapturingGroup(allowedChars)

  if (!allowSpace && allowAllSpecialCharacters) {
    result += createCapturingGroup(`[^\\s]`)
  }

  if (allowedCharacterString !== '') {
    result += '*'
  }
  result += '$'

  return result
}

const createCharacterSet = (input: string): string => {
  if (!input) {
    return input
  }
  return `[${input}]`
}

const createPositiveLookahead = (input: string): string => {
  if (!input) {
    return input
  }
  return `(?=.*${createCharacterSet(input)})`
}

const createNonCapturingGroup = (input: string): string => {
  if (!input) {
    return input
  }
  return `(?:${input})`
}

const createCapturingGroup = (input: string): string => {
  if (!input) {
    return input
  }
  return `(${input})`
}

const createCombination = (pool: string[], length: number) => {
  let result: string[] = []
  let combinationLength = length
  const poolLength = pool.length

  if (combinationLength > poolLength) {
    return result
  }
  if (length === 0) {
    combinationLength = 1
  }

  const indices = Array(combinationLength).fill(0)

  for (let i = 0; i < indices.length; i++) {
    indices[i] = i
  }

  let combined = ''

  for (let i = 0; i < indices.length; i++) {
    combined += pool[i]
  }

  result = [...result, combined]

  while (true) {
    let idx = -1
    for (let i = combinationLength - 1; i > -1; i--) {
      if (indices[i] !== i + poolLength - combinationLength) {
        idx = i
        break
      }
    }

    if (idx === -1) {
      break
    }

    indices[idx]++
    for (let j = idx + 1; j < combinationLength; j++) {
      indices[j] = indices[j - 1] + 1
    }

    combined = ''
    for (const i of indices) {
      combined += pool[i]
    }

    result = [...result, combined]
  }

  return result
}
