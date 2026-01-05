/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PagingInfo = z.object({
  currentPage: z.number().int(),
  hasNext: z.boolean(),
  hasPages: z.boolean(),
  hasPrev: z.boolean(),
  next: z.string(),
  pageNums: z.array(z.number().int()),
  previous: z.string(),
  total: z.number().int()
})

export interface PagingInfo extends z.TypeOf<typeof PagingInfo> {}
