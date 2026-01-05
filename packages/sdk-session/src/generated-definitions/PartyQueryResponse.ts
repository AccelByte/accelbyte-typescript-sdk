/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { PartySessionResponse } from './PartySessionResponse.js'

export const PartyQueryResponse = z.object({ data: z.array(PartySessionResponse), paging: Pagination })

export interface PartyQueryResponse extends z.TypeOf<typeof PartyQueryResponse> {}
