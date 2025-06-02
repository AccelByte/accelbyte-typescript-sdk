/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AuditLogComment } from './AuditLogComment.js'
import { Paging } from './Paging.js'

export const PaginatedAuditLogCommentsResponse = z.object({ data: z.array(AuditLogComment), paging: Paging })

export interface PaginatedAuditLogCommentsResponse extends z.TypeOf<typeof PaginatedAuditLogCommentsResponse> {}
