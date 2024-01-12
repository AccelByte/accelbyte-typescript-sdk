/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetUserGroupInformationResponseV1 } from './GetUserGroupInformationResponseV1.js'
import { Pagination } from './Pagination.js'

export const GetGroupMemberListResponseV1 = z.object({ data: z.array(GetUserGroupInformationResponseV1), paging: Pagination })

export interface GetGroupMemberListResponseV1 extends z.TypeOf<typeof GetGroupMemberListResponseV1> {}
