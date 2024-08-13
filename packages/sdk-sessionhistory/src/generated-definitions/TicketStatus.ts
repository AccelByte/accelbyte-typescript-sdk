/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Ticket } from './Ticket.js'

export const TicketStatus = z.object({ matched: z.boolean(), ticket: Ticket })

export interface TicketStatus extends z.TypeOf<typeof TicketStatus> {}
