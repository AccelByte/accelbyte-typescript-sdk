/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserReportRequest = z.object({
  userId: z.string(),
  category: z.string(),
  subcategory: z.string().nullish(),
  description: z.string().nullish(),
  gameSessionId: z.string().nullish()
})

export type UserReportRequest = z.TypeOf<typeof UserReportRequest>
