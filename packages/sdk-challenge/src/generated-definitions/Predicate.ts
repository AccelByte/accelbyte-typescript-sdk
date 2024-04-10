/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Predicate = z.object({
  matcher: z.enum(['EQUAL', 'GREATER_THAN', 'GREATER_THAN_EQUAL', 'LESS_THAN', 'LESS_THAN_EQUAL']),
  parameterName: z.string(),
  parameterType: z.enum(['ACHIEVEMENT', 'STATISTIC', 'USERACCOUNT']),
  targetValue: z.number()
})

export interface Predicate extends z.TypeOf<typeof Predicate> {}
