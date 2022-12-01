/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PermissionV3 } from './PermissionV3'
import { RoleManagerV3 } from './RoleManagerV3'
import { RoleMemberV3 } from './RoleMemberV3'

export const RoleCreateV3Request = z.object({
  adminRole: z.boolean(),
  deletable: z.boolean().nullish(),
  isWildcard: z.boolean(),
  managers: z.array(RoleManagerV3),
  members: z.array(RoleMemberV3),
  permissions: z.array(PermissionV3),
  roleName: z.string()
})

export type RoleCreateV3Request = z.TypeOf<typeof RoleCreateV3Request>
