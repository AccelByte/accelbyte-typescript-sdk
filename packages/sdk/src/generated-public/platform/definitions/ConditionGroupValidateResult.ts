/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PredicateValidateResult } from './PredicateValidateResult'

export const ConditionGroupValidateResult = z.object({ predicateValidateResults: z.array(PredicateValidateResult).nullish() })

export type ConditionGroupValidateResult = z.TypeOf<typeof ConditionGroupValidateResult>
