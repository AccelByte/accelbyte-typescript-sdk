/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PagingCursor } from './PagingCursor'
import { Session } from './Session'

export const ListSessionResponse = z.object({ paging: PagingCursor, sessions: z.array(Session) })

export interface ListSessionResponse extends z.TypeOf<typeof ListSessionResponse> {}
