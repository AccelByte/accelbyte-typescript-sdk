/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserReportRequest = z.object({
  category: z.string(),
  description: z.string().nullish(),
  gameSessionId: z.string().nullish(),
  subcategory: z.string().nullish(),
  userId: z.string()
})

export interface UserReportRequest extends z.TypeOf<typeof UserReportRequest> {}
