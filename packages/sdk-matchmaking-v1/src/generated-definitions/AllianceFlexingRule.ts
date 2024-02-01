/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Combination } from './Combination.js'

export const AllianceFlexingRule = z.object({
  combination: Combination,
  duration: z.number().int(),
  max_number: z.number().int(),
  min_number: z.number().int(),
  player_max_number: z.number().int(),
  player_min_number: z.number().int()
})

export interface AllianceFlexingRule extends z.TypeOf<typeof AllianceFlexingRule> {}
