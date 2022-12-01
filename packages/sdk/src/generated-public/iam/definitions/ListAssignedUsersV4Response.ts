/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AssignedUserV4Response } from './AssignedUserV4Response'
import { PaginationV3 } from './PaginationV3'

export const ListAssignedUsersV4Response = z.object({ data: z.array(AssignedUserV4Response), paging: PaginationV3 })

export type ListAssignedUsersV4Response = z.TypeOf<typeof ListAssignedUsersV4Response>
