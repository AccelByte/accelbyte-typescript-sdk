/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Meta } from './Meta.js'
import { Paging } from './Paging.js'
import { SimpleAuditLog } from './SimpleAuditLog.js'

export const PaginatedAuditLogsResponse = z.object({ data: z.array(SimpleAuditLog), meta: Meta, paging: Paging })

export interface PaginatedAuditLogsResponse extends z.TypeOf<typeof PaginatedAuditLogsResponse> {}
