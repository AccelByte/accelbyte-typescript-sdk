/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { QueryCursor } from './QueryCursor.js'

export const CursorGetUserRequest = z.object({
  cursor: QueryCursor.nullish(),
  fields: z.array(z.string()).nullish(),
  limit: z.number().int()
})

export interface CursorGetUserRequest extends z.TypeOf<typeof CursorGetUserRequest> {}
