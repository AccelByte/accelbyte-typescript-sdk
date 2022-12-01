/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PermissionV3 } from './PermissionV3'

export const RoleResponseV3 = z.object({
  adminRole: z.boolean(),
  isWildcard: z.boolean(),
  permissions: z.array(PermissionV3),
  roleId: z.string(),
  roleName: z.string()
})

export type RoleResponseV3 = z.TypeOf<typeof RoleResponseV3>
