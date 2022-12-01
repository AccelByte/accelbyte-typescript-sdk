/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3'
import { RoleV4Response } from './RoleV4Response'

export const ListRoleV4Response = z.object({ data: z.array(RoleV4Response), paging: PaginationV3 })

export type ListRoleV4Response = z.TypeOf<typeof ListRoleV4Response>
