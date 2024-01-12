/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FullCategoryInfo = z.object({
  categoryPath: z.string(),
  createdAt: z.string(),
  localizationDisplayNames: z.record(z.string()),
  namespace: z.string(),
  parentCategoryPath: z.string(),
  root: z.boolean().nullish(),
  updatedAt: z.string()
})

export interface FullCategoryInfo extends z.TypeOf<typeof FullCategoryInfo> {}
