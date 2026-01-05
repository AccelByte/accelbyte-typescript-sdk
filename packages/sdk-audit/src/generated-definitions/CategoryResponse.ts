/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Category } from './Category.js'

export const CategoryResponse = z.object({ categories: z.array(Category) })

export interface CategoryResponse extends z.TypeOf<typeof CategoryResponse> {}
