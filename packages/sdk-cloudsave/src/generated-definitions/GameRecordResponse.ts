/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GameRecordResponse = z.object({
  created_at: z.string(),
  key: z.string(),
  namespace: z.string(),
  set_by: z.enum(['CLIENT', 'SERVER']).nullish(),
  tags: z.array(z.string()).nullish(),
  updated_at: z.string(),
  value: z.record(z.any())
})

export interface GameRecordResponse extends z.TypeOf<typeof GameRecordResponse> {}
