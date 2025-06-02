/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TicketStatisticResponse = z.object({
  moderatedCount: z.number().int(),
  openCount: z.number().int(),
  totalCount: z.number().int()
})

export interface TicketStatisticResponse extends z.TypeOf<typeof TicketStatisticResponse> {}
