/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { TicketObservabilityDetail } from './TicketObservabilityDetail.js'

export const TicketDetailQueryResponse = z.object({ data: z.array(TicketObservabilityDetail), paging: Pagination })

export interface TicketDetailQueryResponse extends z.TypeOf<typeof TicketDetailQueryResponse> {}
