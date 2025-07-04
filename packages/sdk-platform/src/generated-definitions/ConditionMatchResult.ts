/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConditionMatchResult = z.object({
  matched: z.boolean().nullish(),
  matchedConditions: z.array(z.any()).nullish(),
  notMatchReason: z.string().nullish()
})

export interface ConditionMatchResult extends z.TypeOf<typeof ConditionMatchResult> {}
