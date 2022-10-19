/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3'
import { RoleResponseWithManagersV3 } from './RoleResponseWithManagersV3'

export const RoleResponseWithManagersAndPaginationV3 = z.object({ data: z.array(RoleResponseWithManagersV3), paging: PaginationV3 })

export type RoleResponseWithManagersAndPaginationV3 = z.TypeOf<typeof RoleResponseWithManagersAndPaginationV3>
