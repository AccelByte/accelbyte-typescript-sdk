/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserProgressionPeriodResponseMeta } from './UserProgressionPeriodResponseMeta.js'

export const UserProgressionResponseMeta = z.object({
  code: z.string(),
  description: z.string(),
  endDate: z.string().nullish(),
  name: z.string(),
  period: UserProgressionPeriodResponseMeta,
  startDate: z.string(),
  userId: z.string()
})

export interface UserProgressionResponseMeta extends z.TypeOf<typeof UserProgressionResponseMeta> {}
