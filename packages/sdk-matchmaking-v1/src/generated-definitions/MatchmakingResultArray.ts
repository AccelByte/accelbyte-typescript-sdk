/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchmakingResult } from './MatchmakingResult.js'

export const MatchmakingResultArray = z.array(MatchmakingResult)

export interface MatchmakingResultArray extends z.TypeOf<typeof MatchmakingResultArray> {}
