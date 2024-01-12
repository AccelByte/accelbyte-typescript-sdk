/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3.js'
import { UserRolesV4Response } from './UserRolesV4Response.js'

export const ListUserRolesV4Response = z.object({ data: z.array(UserRolesV4Response), paging: PaginationV3 })

export interface ListUserRolesV4Response extends z.TypeOf<typeof ListUserRolesV4Response> {}
