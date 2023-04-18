/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ValidationConfig = z.object({
  allowAllSpecialCharacters: z.boolean(),
  allowDigit: z.boolean(),
  allowLetter: z.boolean(),
  allowSpace: z.boolean(),
  allowUnicode: z.boolean(),
  blockedWord: z.array(z.string()),
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

export interface ValidationConfig extends z.TypeOf<typeof ValidationConfig> {}