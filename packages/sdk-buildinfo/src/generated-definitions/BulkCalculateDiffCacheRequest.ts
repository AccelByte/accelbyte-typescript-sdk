/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DiffCacheRequest } from './DiffCacheRequest.js'

export const BulkCalculateDiffCacheRequest = z.object({ diffCacheRequests: z.array(DiffCacheRequest) })

export interface BulkCalculateDiffCacheRequest extends z.TypeOf<typeof BulkCalculateDiffCacheRequest> {}
