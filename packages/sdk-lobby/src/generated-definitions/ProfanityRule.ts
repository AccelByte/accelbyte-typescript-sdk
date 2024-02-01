/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ProfanityRule = z.object({ Namespace: z.string(), Rule: z.string() })

export interface ProfanityRule extends z.TypeOf<typeof ProfanityRule> {}
