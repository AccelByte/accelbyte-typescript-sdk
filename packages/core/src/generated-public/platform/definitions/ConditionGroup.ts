/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PredicateObject } from './PredicateObject'

export const ConditionGroup = z.object({ predicates: z.array(PredicateObject).nullish(), operator: z.enum(['and', 'or']).nullish() })

export type ConditionGroup = z.TypeOf<typeof ConditionGroup>
