/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { TicketResponse } from './TicketResponse.js'

export const TicketListResponse = z.object({ data: z.array(TicketResponse), paging: Pagination })

export interface TicketListResponse extends z.TypeOf<typeof TicketListResponse> {}
