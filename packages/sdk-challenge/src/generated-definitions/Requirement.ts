/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Predicate } from './Predicate.js'

export const Requirement = z.object({ operator: z.enum(['AND']), predicates: z.array(Predicate) })

export interface Requirement extends z.TypeOf<typeof Requirement> {}
