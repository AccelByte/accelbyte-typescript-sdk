/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const HierarchicalCategoryInfo: z.ZodType<HierarchicalCategoryInfo> = z.lazy(() =>
  z.object({
    namespace: z.string(),
    parentCategoryPath: z.string(),
    categoryPath: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    displayName: z.string(),
    childCategories: z.array(HierarchicalCategoryInfo),
    root: z.boolean().nullish()
  })
)

export type HierarchicalCategoryInfo = {
  namespace: string
  parentCategoryPath: string
  categoryPath: string
  createdAt: string
  updatedAt: string
  displayName: string
  childCategories: HierarchicalCategoryInfo[]
  root?: boolean | null | undefined
}
