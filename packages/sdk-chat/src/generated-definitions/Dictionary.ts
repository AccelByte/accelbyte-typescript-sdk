/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Dictionary = z.object({
  id: z.string(),
  namespace: z.string(),
  parentId: z.string().nullish(),
  word: z.string(),
  wordType: z.string()
})

export interface Dictionary extends z.TypeOf<typeof Dictionary> {}
