/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchingAlly } from './MatchingAlly.js'

export const RebalanceResponse = z.object({ match_id: z.string(), matching_allies: z.array(MatchingAlly) })

export interface RebalanceResponse extends z.TypeOf<typeof RebalanceResponse> {}
