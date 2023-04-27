/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MemberRoleResponseV1 } from './MemberRoleResponseV1.js'
import { Pagination } from './Pagination.js'

export const GetMemberRolesListResponseV1 = z.object({ data: z.array(MemberRoleResponseV1), paging: Pagination })

export interface GetMemberRolesListResponseV1 extends z.TypeOf<typeof GetMemberRolesListResponseV1> {}
