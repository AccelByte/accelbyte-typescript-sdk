/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchOption } from './MatchOption.js'

export const MatchOptionRule = z.object({ options: z.array(MatchOption).nullish() })

export interface MatchOptionRule extends z.TypeOf<typeof MatchOptionRule> {}
