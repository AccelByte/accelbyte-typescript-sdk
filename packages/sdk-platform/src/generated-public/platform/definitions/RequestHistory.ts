/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RequestHistory = z.object({
  status: z.enum(['PENDING', 'FAIL', 'SUCCESS']).nullish(),
  requestTime: z.string().nullish(),
  responseTime: z.string().nullish(),
  statusCode: z.number().int().nullish(),
  responseBody: z.record(z.any()).nullish()
})

export interface RequestHistory extends z.TypeOf<typeof RequestHistory> {}
