/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameSession } from './GameSession'
import { PagingCursor } from './PagingCursor'

export const ActiveMatchmakingGameResponse = z.object({ pagination: PagingCursor, sessions: z.array(GameSession) })

export interface ActiveMatchmakingGameResponse extends z.TypeOf<typeof ActiveMatchmakingGameResponse> {}
