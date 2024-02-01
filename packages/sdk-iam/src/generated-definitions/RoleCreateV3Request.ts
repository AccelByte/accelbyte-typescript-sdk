/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PermissionV3 } from './PermissionV3.js'
import { RoleManagerV3 } from './RoleManagerV3.js'
import { RoleMemberV3 } from './RoleMemberV3.js'

export const RoleCreateV3Request = z.object({
  adminRole: z.boolean(),
  deletable: z.boolean().nullish(),
  isWildcard: z.boolean(),
  managers: z.array(RoleManagerV3),
  members: z.array(RoleMemberV3),
  permissions: z.array(PermissionV3),
  roleName: z.string()
})

export interface RoleCreateV3Request extends z.TypeOf<typeof RoleCreateV3Request> {}
