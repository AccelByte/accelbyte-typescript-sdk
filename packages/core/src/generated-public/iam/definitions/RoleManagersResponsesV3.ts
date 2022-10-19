/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3'
import { RoleManagerV3 } from './RoleManagerV3'

export const RoleManagersResponsesV3 = z.object({ data: z.array(RoleManagerV3), paging: PaginationV3 })

export type RoleManagersResponsesV3 = z.TypeOf<typeof RoleManagersResponsesV3>
