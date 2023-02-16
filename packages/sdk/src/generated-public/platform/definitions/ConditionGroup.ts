/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Predicate } from './Predicate'

export const ConditionGroup = z.object({ predicates: z.array(Predicate).nullish(), operator: z.enum(['and', 'or']).nullish() })

export interface ConditionGroup extends z.TypeOf<typeof ConditionGroup> {}
