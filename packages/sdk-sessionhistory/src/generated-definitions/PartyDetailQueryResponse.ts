/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { PartyDetail } from './PartyDetail.js'

export const PartyDetailQueryResponse = z.object({ data: z.array(PartyDetail), paging: Pagination })

export interface PartyDetailQueryResponse extends z.TypeOf<typeof PartyDetailQueryResponse> {}
