/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameSession } from './GameSession.js'
import { PagingCursor } from './PagingCursor.js'

export const SessionQueryResponse = z.object({ pagination: PagingCursor, sessions: z.array(GameSession) })

export interface SessionQueryResponse extends z.TypeOf<typeof SessionQueryResponse> {}
