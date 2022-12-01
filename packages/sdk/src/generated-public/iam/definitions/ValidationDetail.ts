/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InputValidationDescription } from './InputValidationDescription'

export const ValidationDetail = z.object({
  allowAllSpecialCharacters: z.boolean(),
  allowDigit: z.boolean(),
  allowLetter: z.boolean(),
  allowSpace: z.boolean(),
  allowUnicode: z.boolean(),
  blockedWord: z.array(z.string()),
  description: z.array(InputValidationDescription),
  isCustomRegex: z.boolean(),
  letterCase: z.string(),
  maxLength: z.number().int(),
  maxRepeatingAlphaNum: z.number().int(),
  maxRepeatingSpecialCharacter: z.number().int(),
  minCharType: z.number().int(),
  minLength: z.number().int(),
  regex: z.string(),
  specialCharacterLocation: z.string(),
  specialCharacters: z.array(z.string())
})

export type ValidationDetail = z.TypeOf<typeof ValidationDetail>
