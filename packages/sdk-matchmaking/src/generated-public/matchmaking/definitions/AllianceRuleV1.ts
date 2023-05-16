/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Combination } from './Combination.js'

export const AllianceRuleV1 = z.object({
  combination: Combination,
  maxNumber: z.number().int(),
  minNumber: z.number().int(),
  playerMaxNumber: z.number().int(),
  playerMinNumber: z.number().int()
})

export interface AllianceRuleV1 extends z.TypeOf<typeof AllianceRuleV1> {}
