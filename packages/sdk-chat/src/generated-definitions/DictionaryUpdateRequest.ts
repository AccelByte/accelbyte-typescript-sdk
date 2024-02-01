/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DictionaryUpdateRequest = z.object({
  falseNegative: z.array(z.string()),
  falsePositive: z.array(z.string()),
  word: z.string(),
  wordType: z.string()
})

export interface DictionaryUpdateRequest extends z.TypeOf<typeof DictionaryUpdateRequest> {}
