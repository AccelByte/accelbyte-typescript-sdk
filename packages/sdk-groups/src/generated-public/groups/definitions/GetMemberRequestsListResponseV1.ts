/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MemberRequestResponseV1 } from './MemberRequestResponseV1.js'
import { Pagination } from './Pagination.js'

export const GetMemberRequestsListResponseV1 = z.object({ data: z.array(MemberRequestResponseV1), paging: Pagination })

export interface GetMemberRequestsListResponseV1 extends z.TypeOf<typeof GetMemberRequestsListResponseV1> {}
