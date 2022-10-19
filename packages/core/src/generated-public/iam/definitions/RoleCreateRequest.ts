/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission'
import { RoleManager } from './RoleManager'
import { RoleMember } from './RoleMember'

export const RoleCreateRequest = z.object({
  AdminRole: z.boolean(),
  Managers: z.array(RoleManager),
  Members: z.array(RoleMember),
  Permissions: z.array(Permission),
  RoleName: z.string()
})

export type RoleCreateRequest = z.TypeOf<typeof RoleCreateRequest>
