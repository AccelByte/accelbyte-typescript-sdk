/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AvailableComparison = z.object({
  comparison: z
    .enum(['excludes', 'includes', 'is', 'isGreaterThan', 'isGreaterThanOrEqual', 'isLessThan', 'isLessThanOrEqual', 'isNot'])
    .nullish(),
  text: z.string().nullish()
})

export interface AvailableComparison extends z.TypeOf<typeof AvailableComparison> {}
