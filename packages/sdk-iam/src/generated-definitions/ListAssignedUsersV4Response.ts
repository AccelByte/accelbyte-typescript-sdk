/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AssignedUserV4Response } from './AssignedUserV4Response.js'
import { PaginationV3 } from './PaginationV3.js'

export const ListAssignedUsersV4Response = z.object({ data: z.array(AssignedUserV4Response), paging: PaginationV3 })

export interface ListAssignedUsersV4Response extends z.TypeOf<typeof ListAssignedUsersV4Response> {}
