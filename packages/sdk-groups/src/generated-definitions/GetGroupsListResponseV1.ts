/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GroupResponseV1 } from './GroupResponseV1.js'
import { Pagination } from './Pagination.js'

export const GetGroupsListResponseV1 = z.object({ data: z.array(GroupResponseV1), paging: Pagination })

export interface GetGroupsListResponseV1 extends z.TypeOf<typeof GetGroupsListResponseV1> {}
