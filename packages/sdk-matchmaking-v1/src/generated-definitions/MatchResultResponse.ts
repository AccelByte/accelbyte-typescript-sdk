/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayerResultResponse } from './PlayerResultResponse.js'

export const MatchResultResponse = z.object({ match_id: z.string(), players: z.array(PlayerResultResponse) })

export interface MatchResultResponse extends z.TypeOf<typeof MatchResultResponse> {}
