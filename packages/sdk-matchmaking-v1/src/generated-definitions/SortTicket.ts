/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SortTicket = z.object({
  search_result: z.enum(['distance', 'largestPartySize', 'none', 'oldestTicketAge', 'random']),
  ticket_queue: z.enum(['distance', 'largestPartySize', 'none', 'oldestTicketAge', 'random'])
})

export interface SortTicket extends z.TypeOf<typeof SortTicket> {}
