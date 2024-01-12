/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameSession } from './GameSession.js'

export const SessionByUserIDsResponse = z.object({ data: z.array(GameSession) })

export interface SessionByUserIDsResponse extends z.TypeOf<typeof SessionByUserIDsResponse> {}
