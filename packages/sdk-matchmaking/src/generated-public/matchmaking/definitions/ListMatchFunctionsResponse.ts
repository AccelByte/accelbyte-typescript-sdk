/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchFunctionConfig } from './MatchFunctionConfig.js'
import { Pagination } from './Pagination.js'

export const ListMatchFunctionsResponse = z.object({
  configs: z.array(MatchFunctionConfig),
  functions: z.array(z.string()),
  pagination: Pagination
})

export interface ListMatchFunctionsResponse extends z.TypeOf<typeof ListMatchFunctionsResponse> {}
