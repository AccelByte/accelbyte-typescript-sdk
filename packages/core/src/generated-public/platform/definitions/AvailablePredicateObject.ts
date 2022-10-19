/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AvailableComparisonObject } from './AvailableComparisonObject'

export const AvailablePredicateObject = z.object({
  predicateType: z.enum(['EntitlementPredicate', 'SeasonPassPredicate', 'SeasonTierPredicate']).nullish(),
  availableComparisons: z.array(AvailableComparisonObject).nullish(),
  valueType: z.enum(['List', 'Number', 'String']).nullish(),
  showAnyOf: z.boolean().nullish()
})

export type AvailablePredicateObject = z.TypeOf<typeof AvailablePredicateObject>
