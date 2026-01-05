/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const S2SDataRequestSummary = z.object({
  failedMessage: z.string().nullish(),
  status: z.enum(['Canceled', 'Completed', 'Failed', 'In-Progress', 'Pending']),
  url: z.string().nullish()
})

export interface S2SDataRequestSummary extends z.TypeOf<typeof S2SDataRequestSummary> {}
