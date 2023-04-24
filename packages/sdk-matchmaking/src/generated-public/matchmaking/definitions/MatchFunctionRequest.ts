/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MatchFunctionRequest = z.object({ match_function: z.string(), url: z.string() })

export interface MatchFunctionRequest extends z.TypeOf<typeof MatchFunctionRequest> {}
