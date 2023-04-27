/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ResponseDeleteBulkGameSessions } from './ResponseDeleteBulkGameSessions.js'

export const DeleteBulkGameSessionsApiResponse = z.object({ failed: z.array(ResponseDeleteBulkGameSessions), success: z.array(z.string()) })

export interface DeleteBulkGameSessionsApiResponse extends z.TypeOf<typeof DeleteBulkGameSessionsApiResponse> {}
