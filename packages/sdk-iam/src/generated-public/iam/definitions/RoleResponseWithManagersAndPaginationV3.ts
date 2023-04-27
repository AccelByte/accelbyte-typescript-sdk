/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3.js'
import { RoleResponseWithManagersV3 } from './RoleResponseWithManagersV3.js'

export const RoleResponseWithManagersAndPaginationV3 = z.object({ data: z.array(RoleResponseWithManagersV3), paging: PaginationV3 })

export interface RoleResponseWithManagersAndPaginationV3 extends z.TypeOf<typeof RoleResponseWithManagersAndPaginationV3> {}
