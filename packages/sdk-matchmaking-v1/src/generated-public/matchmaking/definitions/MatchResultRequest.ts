/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayerResultRequest } from './PlayerResultRequest.js'

export const MatchResultRequest = z.object({ match_id: z.string(), players: z.array(PlayerResultRequest) })

export interface MatchResultRequest extends z.TypeOf<typeof MatchResultRequest> {}
