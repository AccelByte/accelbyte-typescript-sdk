/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3.js'
import { RoleV4Response } from './RoleV4Response.js'

export const ListRoleV4Response = z.object({ data: z.array(RoleV4Response), paging: PaginationV3 })

export interface ListRoleV4Response extends z.TypeOf<typeof ListRoleV4Response> {}
