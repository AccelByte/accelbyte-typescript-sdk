/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3.js'
import { RoleManagerV3 } from './RoleManagerV3.js'

export const RoleManagersResponsesV3 = z.object({ data: z.array(RoleManagerV3), paging: PaginationV3 })

export interface RoleManagersResponsesV3 extends z.TypeOf<typeof RoleManagersResponsesV3> {}
