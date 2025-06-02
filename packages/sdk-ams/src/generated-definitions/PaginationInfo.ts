/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaginationInfo = z.object({
  first: z.string(),
  last: z.string(),
  next: z.string(),
  previous: z.string(),
  total: z.number().int()
})

export interface PaginationInfo extends z.TypeOf<typeof PaginationInfo> {}
