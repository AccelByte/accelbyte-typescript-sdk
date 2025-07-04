/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CategoryInfo } from './CategoryInfo.js'

export const CategoryInfoArray = z.array(CategoryInfo)

export interface CategoryInfoArray extends z.TypeOf<typeof CategoryInfoArray> {}
