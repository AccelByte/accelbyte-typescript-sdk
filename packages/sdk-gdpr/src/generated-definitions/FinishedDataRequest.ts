/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FinishedDataRequest = z.object({
  dataExpirationDate: z.string().nullish(),
  failedMessage: z.string().nullish(),
  finishedDate: z.string(),
  requestDate: z.string(),
  requestId: z.string(),
  status: z.enum(['Completed', 'Failed']),
  userId: z.string()
})

export interface FinishedDataRequest extends z.TypeOf<typeof FinishedDataRequest> {}
