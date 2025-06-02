/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AvatarConfig } from './AvatarConfig.js'
import { ValidationDescription } from './ValidationDescription.js'

export const Validation = z.object({
  allowAllSpecialCharacters: z.boolean(),
  allowDigit: z.boolean(),
  allowLetter: z.boolean(),
  allowSpace: z.boolean(),
  allowUnicode: z.boolean(),
  avatarConfig: AvatarConfig.nullish(),
  blockedWord: z.array(z.string()),
  description: z.array(ValidationDescription),
  isCustomRegex: z.boolean(),
  letterCase: z.string(),
  maxLength: z.number().int(),
  maxRepeatingAlphaNum: z.number().int(),
  maxRepeatingSpecialCharacter: z.number().int(),
  minCharType: z.number().int(),
  minLength: z.number().int(),
  profanityFilter: z.string(),
  regex: z.string(),
  specialCharacterLocation: z.string(),
  specialCharacters: z.array(z.string())
})

export interface Validation extends z.TypeOf<typeof Validation> {}
