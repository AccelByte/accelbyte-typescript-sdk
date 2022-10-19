/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { HierarchicalCategoryInfo } from './HierarchicalCategoryInfo'

export const HierarchicalCategoryInfoArray = z.array(HierarchicalCategoryInfo)

export type HierarchicalCategoryInfoArray = z.TypeOf<typeof HierarchicalCategoryInfoArray>
