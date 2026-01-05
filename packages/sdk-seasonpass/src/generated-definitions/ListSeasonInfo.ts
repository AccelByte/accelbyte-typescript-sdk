/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ListSeasonInfo = z.object({
  createdAt: z.string(),
  defaultLanguage: z.string(),
  end: z.string(),
  id: z.string(),
  name: z.string(),
  namespace: z.string(),
  passCodes: z.array(z.string()).nullish(),
  publishedAt: z.string().nullish(),
  start: z.string(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'RETIRED']),
  tierItemId: z.string(),
  tierItemName: z.string(),
  updatedAt: z.string()
})

export interface ListSeasonInfo extends z.TypeOf<typeof ListSeasonInfo> {}
