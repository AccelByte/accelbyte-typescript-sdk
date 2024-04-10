/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SortTicketRule = z.object({ search_result: z.string(), threshold: z.number().int(), ticket_queue: z.string() })

export interface SortTicketRule extends z.TypeOf<typeof SortTicketRule> {}
