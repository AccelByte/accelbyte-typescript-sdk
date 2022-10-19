/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission'
import { RoleManager } from './RoleManager'
import { RoleMember } from './RoleMember'

export const Role = z.object({
  AdminRole: z.boolean(),
  Deletable: z.boolean(),
  IsWildcard: z.boolean(),
  Managers: z.array(RoleManager),
  Members: z.array(RoleMember),
  Permissions: z.array(Permission),
  RoleId: z.string(),
  RoleName: z.string()
})

export type Role = z.TypeOf<typeof Role>
