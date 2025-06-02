/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission.js'

export const RolePermissionResponseV3 = z.object({ permissions: z.array(Permission) })

export interface RolePermissionResponseV3 extends z.TypeOf<typeof RolePermissionResponseV3> {}
