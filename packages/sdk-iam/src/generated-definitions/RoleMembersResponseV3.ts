/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3.js'
import { RoleMemberV3 } from './RoleMemberV3.js'

export const RoleMembersResponseV3 = z.object({ data: z.array(RoleMemberV3), paging: PaginationV3 })

export interface RoleMembersResponseV3 extends z.TypeOf<typeof RoleMembersResponseV3> {}
