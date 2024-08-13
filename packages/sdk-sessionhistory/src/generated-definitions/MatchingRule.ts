/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MatchingRule = z.object({ attribute: z.string(), criteria: z.string(), reference: z.number() })

export interface MatchingRule extends z.TypeOf<typeof MatchingRule> {}
