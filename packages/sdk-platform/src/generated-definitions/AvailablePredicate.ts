/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AvailableComparison } from './AvailableComparison.js'

export const AvailablePredicate = z.object({
  availableComparisons: z.array(AvailableComparison).nullish(),
  predicateType: z.enum(['EntitlementPredicate', 'SeasonPassPredicate', 'SeasonTierPredicate', 'StatisticCodePredicate']).nullish(),
  showAnyOf: z.boolean().nullish(),
  valueType: z.enum(['List', 'Number', 'String']).nullish()
})

export interface AvailablePredicate extends z.TypeOf<typeof AvailablePredicate> {}
