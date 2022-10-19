/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3'
import { RoleMemberV3 } from './RoleMemberV3'

export const RoleMembersResponseV3 = z.object({ data: z.array(RoleMemberV3), paging: PaginationV3 })

export type RoleMembersResponseV3 = z.TypeOf<typeof RoleMembersResponseV3>
