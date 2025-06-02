/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NativeSession } from './NativeSession.js'
import { Pagination } from './Pagination.js'

export const NativeSessionPagingResponse = z.object({ data: z.array(NativeSession), paging: Pagination })

export interface NativeSessionPagingResponse extends z.TypeOf<typeof NativeSessionPagingResponse> {}
