/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MockMatch } from './MockMatch.js'

export const GetMockMatchesResponse = z.object({
  count: z.number().int(),
  largest_mmr_distance: z.number().int(),
  longest_time_to_match_seconds: z.number().int(),
  matches: z.array(MockMatch)
})

export interface GetMockMatchesResponse extends z.TypeOf<typeof GetMockMatchesResponse> {}
