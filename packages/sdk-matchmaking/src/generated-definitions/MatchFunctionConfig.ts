/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MatchFunctionConfig = z.object({ match_function: z.string(), serviceAppName: z.string().nullish(), url: z.string() })

export interface MatchFunctionConfig extends z.TypeOf<typeof MatchFunctionConfig> {}
