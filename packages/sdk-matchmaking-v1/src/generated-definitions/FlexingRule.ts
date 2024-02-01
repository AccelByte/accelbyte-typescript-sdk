/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FlexingRule = z.object({ attribute: z.string(), criteria: z.string(), duration: z.number().int(), reference: z.number() })

export interface FlexingRule extends z.TypeOf<typeof FlexingRule> {}
