/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MessageResultWithAttributes = z.object({
  action: z.string(),
  attributes: z.record(z.any()).nullish(),
  cencoredWords: z.array(z.string()).nullish(),
  classifications: z.array(z.string()).nullish(),
  finalMessage: z.string(),
  id: z.string(),
  referenceId: z.string().nullish(),
  timestamp: z.number().int()
})

export interface MessageResultWithAttributes extends z.TypeOf<typeof MessageResultWithAttributes> {}
