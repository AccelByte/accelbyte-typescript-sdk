/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DictionaryWordChanges = z.object({
  added: z.array(z.string()),
  failed: z.array(z.string()),
  ignored: z.array(z.string()),
  replaced: z.array(z.string()),
  unchanged: z.array(z.string())
})

export interface DictionaryWordChanges extends z.TypeOf<typeof DictionaryWordChanges> {}
