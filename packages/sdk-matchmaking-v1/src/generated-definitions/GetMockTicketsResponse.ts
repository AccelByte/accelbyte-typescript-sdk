/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MockTicket } from './MockTicket.js'

export const GetMockTicketsResponse = z.object({
  cancelled_count: z.number().int(),
  highest_mmr: z.number().int(),
  in_queue_count: z.number().int(),
  lowest_mmr: z.number().int(),
  matched_count: z.number().int(),
  mmr_in_queue: z.record(z.number().int()),
  mmr_matched: z.record(z.number().int()),
  mmr_timeout: z.record(z.number().int()),
  tickets: z.array(MockTicket),
  timeout_count: z.number().int()
})

export interface GetMockTicketsResponse extends z.TypeOf<typeof GetMockTicketsResponse> {}
