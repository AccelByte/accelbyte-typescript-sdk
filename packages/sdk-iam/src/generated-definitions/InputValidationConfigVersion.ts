/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AvatarConfig } from './AvatarConfig.js'

export const InputValidationConfigVersion = z.object({
  allowAllSpecialCharacters: z.boolean(),
  allowDigit: z.boolean(),
  allowLetter: z.boolean(),
  allowSpace: z.boolean(),
  allowUnicode: z.boolean(),
  avatarConfig: AvatarConfig.nullish(),
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
  specialCharacters: z.array(z.string()),
  version: z.number().int()
})

export interface InputValidationConfigVersion extends z.TypeOf<typeof InputValidationConfigVersion> {}
