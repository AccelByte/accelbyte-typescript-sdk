/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AvailableComparison } from './AvailableComparison'

export const AvailablePredicate = z.object({
  predicateType: z.enum(['EntitlementPredicate', 'SeasonPassPredicate', 'SeasonTierPredicate']).nullish(),
  availableComparisons: z.array(AvailableComparison).nullish(),
  valueType: z.enum(['List', 'Number', 'String']).nullish(),
  showAnyOf: z.boolean().nullish()
})

export interface AvailablePredicate extends z.TypeOf<typeof AvailablePredicate> {}
