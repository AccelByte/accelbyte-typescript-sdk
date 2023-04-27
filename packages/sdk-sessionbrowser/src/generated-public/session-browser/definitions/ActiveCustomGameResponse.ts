/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CustomGameResponse } from './CustomGameResponse.js'
import { PagingCursor } from './PagingCursor.js'

export const ActiveCustomGameResponse = z.object({ pagination: PagingCursor, sessions: z.array(CustomGameResponse) })

export interface ActiveCustomGameResponse extends z.TypeOf<typeof ActiveCustomGameResponse> {}
