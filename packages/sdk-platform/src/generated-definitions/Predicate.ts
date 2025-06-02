/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Predicate = z.object({
  anyOf: z.number().int().nullish(),
  code: z.string().nullish(),
  comparison: z
    .enum(['excludes', 'includes', 'is', 'isGreaterThan', 'isGreaterThanOrEqual', 'isLessThan', 'isLessThanOrEqual', 'isNot'])
    .nullish(),
  name: z.string().nullish(),
  predicateType: z.enum(['EntitlementPredicate', 'SeasonPassPredicate', 'SeasonTierPredicate', 'StatisticCodePredicate']).nullish(),
  value: z.string().nullish(),
  values: z.array(z.string()).nullish()
})

export interface Predicate extends z.TypeOf<typeof Predicate> {}
