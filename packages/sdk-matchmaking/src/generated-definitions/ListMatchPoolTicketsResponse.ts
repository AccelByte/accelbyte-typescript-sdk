/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchTicketRecord } from './MatchTicketRecord.js'
import { Pagination } from './Pagination.js'

export const ListMatchPoolTicketsResponse = z.object({
  data: z.array(MatchTicketRecord),
  pagination: Pagination.nullish(),
  totalData: z.number().int()
})

export interface ListMatchPoolTicketsResponse extends z.TypeOf<typeof ListMatchPoolTicketsResponse> {}
