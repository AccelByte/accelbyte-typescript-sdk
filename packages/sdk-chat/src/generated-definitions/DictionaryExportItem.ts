/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DictionaryExportItem = z.object({
  falseNegative: z.array(z.string()).nullish(),
  falsePositive: z.array(z.string()).nullish(),
  word: z.string()
})

export interface DictionaryExportItem extends z.TypeOf<typeof DictionaryExportItem> {}
