/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const HierarchicalCategoryInfo: z.ZodType<HierarchicalCategoryInfo> = z.lazy(() =>
  z.object({
    categoryPath: z.string(),
    childCategories: z.array(HierarchicalCategoryInfo),
    createdAt: z.string(),
    displayName: z.string(),
    namespace: z.string(),
    parentCategoryPath: z.string(),
    root: z.boolean().nullish(),
    updatedAt: z.string()
  })
)

export interface HierarchicalCategoryInfo {
  categoryPath: string
  childCategories: HierarchicalCategoryInfo[]
  createdAt: string
  displayName: string
  namespace: string
  parentCategoryPath: string
  root?: boolean | null | undefined
  updatedAt: string
}
