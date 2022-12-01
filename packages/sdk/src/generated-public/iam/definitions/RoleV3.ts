/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PermissionV3 } from './PermissionV3'
import { RoleManagerV3 } from './RoleManagerV3'
import { RoleMemberV3 } from './RoleMemberV3'

export const RoleV3 = z.object({
  adminRole: z.boolean(),
  isWildcard: z.boolean(),
  managers: z.array(RoleManagerV3),
  members: z.array(RoleMemberV3),
  permissions: z.array(PermissionV3),
  roleId: z.string(),
  roleName: z.string()
})

export type RoleV3 = z.TypeOf<typeof RoleV3>
