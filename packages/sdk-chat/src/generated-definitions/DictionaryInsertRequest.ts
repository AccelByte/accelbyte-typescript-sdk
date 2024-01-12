/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DictionaryInsertRequest = z.object({
  falseNegative: z.array(z.string()),
  falsePositive: z.array(z.string()),
  word: z.string(),
  wordType: z.string()
})

export interface DictionaryInsertRequest extends z.TypeOf<typeof DictionaryInsertRequest> {}
