/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CursorGetUserResponseData } from './CursorGetUserResponseData.js'
import { QueryCursor } from './QueryCursor.js'

export const CursorGetUserResponse = z.object({ cursor: QueryCursor, data: z.array(CursorGetUserResponseData) })

export interface CursorGetUserResponse extends z.TypeOf<typeof CursorGetUserResponse> {}
