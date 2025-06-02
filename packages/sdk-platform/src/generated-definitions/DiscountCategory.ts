/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DiscountCategory = z.object({ categoryPath: z.string(), includeSubCategories: z.boolean().nullish() })

export interface DiscountCategory extends z.TypeOf<typeof DiscountCategory> {}
