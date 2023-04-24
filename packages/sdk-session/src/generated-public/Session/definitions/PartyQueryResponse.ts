/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'
import { PartySessionResponse } from './PartySessionResponse'

export const PartyQueryResponse = z.object({ data: z.array(PartySessionResponse), paging: Pagination })

export interface PartyQueryResponse extends z.TypeOf<typeof PartyQueryResponse> {}
