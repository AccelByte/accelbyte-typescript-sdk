/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchMatchmaking } from './MatchMatchmaking.js'

export const XRayMatchMatchmakingQueryResponse = z.object({ data: z.array(MatchMatchmaking) })

export interface XRayMatchMatchmakingQueryResponse extends z.TypeOf<typeof XRayMatchMatchmakingQueryResponse> {}
