/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RequestHistory = z.object({
  requestTime: z.string().nullish(),
  responseBody: z.record(z.any()).nullish(),
  responseTime: z.string().nullish(),
  status: z.enum(['FAIL', 'PENDING', 'SUCCESS']).nullish(),
  statusCode: z.number().int().nullish()
})

export interface RequestHistory extends z.TypeOf<typeof RequestHistory> {}
