/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export const REGEX_ALPHANUMERIC_WITH_HYPHEN = '^[^\\W_-][\\w-]+[^\\W_-]$'
export const REGEX_LETTER_CASE = /[a-zA-Z]/
export const REGEX_MIXED_LETTER_CASE = /([a-z].*[A-Z])|([A-Z].*[a-z])/
export const REGEX_UPPERCASE = /^[^a-z]*$/
export const REGEX_LOWERCASE = /^[^A-Z]*$/
export const REGEX_ALL_SPECIAL_CHARACTERS = /[^a-zA-Z\d\s]/
export const REGEX_SPECIAL_CHARACTERS_AND_UNICODE = /[^a-zA-Z\d\s\u007e-\uFFFF]/
export const REGEX_ALLOW_UNICODE = /[\u007e-\uFFFF]/
export const REGEX_START_OR_END_WITH_SPECIAL_CHARACTER = /^\W|\W$/
export const REGEX_START_OR_END_WITH_SPECIAL_CHARACTER_NOT_UNICODE = /^\W\u007e-\uFFFF|\W\u007e-\uFFFF/
export const REGEX_SPECIAL_CHARACTERS = (specialCharacters: string[]) => `[^a-zA-Z0-9${specialCharacters.join('')}]`
// Dev's note:
// So probably, how the RegEx below (for special characters) works is that, let's say max repeating characters is 2.
// It will result in /(group)capturegroup1{2,}/ -- so, it will only catch values with 3 or more repeating characters.

// eslint-disable-next-line
export const REGEX_ALL_SPECIAL_CHARACTER_REPEAT = maxRepeatingSpecialCharacter => `([^\\w\\s])\\1{${maxRepeatingSpecialCharacter},}`
export const REGEX_SPECIAL_CHARACTER_WITH_ALLOW_SPACE = (specialCharacters: string[], allowSpace?: boolean) =>
  `[^a-zA-Z0-9\\${specialCharacters.join('')}${allowSpace ? '\\s' : ''}]`
export const REGEX_SPECIAL_CHARACTER_REPEAT = (specialCharacters: string[], maxRepeatingSpecialCharacter) =>
  `([${specialCharacters.join('\\')}])\\1{${maxRepeatingSpecialCharacter},}`
export const REGEX_ALPHA_NUMERIC_CHARACTER_REPEAT = maxRepeatingSpecialCharacter => `([A-Za-z0-9])\\1{${maxRepeatingSpecialCharacter},}`
