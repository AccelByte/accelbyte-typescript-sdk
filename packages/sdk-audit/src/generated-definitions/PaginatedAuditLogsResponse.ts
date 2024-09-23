/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { SimpleAuditLog } from './SimpleAuditLog.js'

export const PaginatedAuditLogsResponse = z.object({ data: z.array(SimpleAuditLog), paging: Paging })

export interface PaginatedAuditLogsResponse extends z.TypeOf<typeof PaginatedAuditLogsResponse> {}
