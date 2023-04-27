/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { HierarchicalCategoryInfo } from './HierarchicalCategoryInfo.js'

export const HierarchicalCategoryInfoArray = z.array(HierarchicalCategoryInfo)

export interface HierarchicalCategoryInfoArray extends z.TypeOf<typeof HierarchicalCategoryInfoArray> {}
