/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SortTicketRule = z.object({
  search_result: z.enum(['distance', 'largestPartySize', 'none', 'oldestTicketAge', 'random']),
  threshold: z.number().int(),
  ticket_queue: z.enum(['distance', 'largestPartySize', 'none', 'oldestTicketAge', 'random'])
})

export interface SortTicketRule extends z.TypeOf<typeof SortTicketRule> {}
