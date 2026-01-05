/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchTicketStatus } from './MatchTicketStatus.js'
import { Pagination } from './Pagination.js'

export const MatchTicketStatuses = z.object({ data: z.array(MatchTicketStatus), pagination: Pagination.nullish() })

export interface MatchTicketStatuses extends z.TypeOf<typeof MatchTicketStatuses> {}
