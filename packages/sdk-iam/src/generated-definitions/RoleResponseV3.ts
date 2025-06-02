/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PermissionV3 } from './PermissionV3.js'

export const RoleResponseV3 = z.object({
  adminRole: z.boolean(),
  isWildcard: z.boolean(),
  permissions: z.array(PermissionV3),
  roleId: z.string(),
  roleName: z.string()
})

export interface RoleResponseV3 extends z.TypeOf<typeof RoleResponseV3> {}
