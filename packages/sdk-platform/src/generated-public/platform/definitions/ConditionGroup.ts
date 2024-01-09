/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Predicate } from './Predicate.js'

export const ConditionGroup = z.object({ operator: z.enum(['and', 'or']).nullish(), predicates: z.array(Predicate).nullish() })

export interface ConditionGroup extends z.TypeOf<typeof ConditionGroup> {}
