/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PredicateObject = z.object({
  name: z.string().nullish(),
  predicateType: z.enum(['EntitlementPredicate', 'SeasonPassPredicate', 'SeasonTierPredicate']).nullish(),
  comparison: z
    .enum(['is', 'isNot', 'isGreaterThan', 'isGreaterThanOrEqual', 'isLessThan', 'isLessThanOrEqual', 'includes', 'excludes'])
    .nullish(),
  anyOf: z.number().int().nullish(),
  values: z.array(z.string()).nullish(),
  value: z.string().nullish()
})

export type PredicateObject = z.TypeOf<typeof PredicateObject>
