/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FinishedDataDeletion = z.object({
  failedMessage: z.string().nullish(),
  finishedDate: z.string(),
  requestDate: z.string(),
  status: z.enum(['Completed', 'Failed']),
  userId: z.string()
})

export interface FinishedDataDeletion extends z.TypeOf<typeof FinishedDataDeletion> {}
