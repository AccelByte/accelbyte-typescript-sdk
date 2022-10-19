/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CategoryInfo = z.object({
  namespace: z.string(),
  parentCategoryPath: z.string(),
  categoryPath: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  displayName: z.string(),
  root: z.boolean().nullish()
})

export type CategoryInfo = z.TypeOf<typeof CategoryInfo>
