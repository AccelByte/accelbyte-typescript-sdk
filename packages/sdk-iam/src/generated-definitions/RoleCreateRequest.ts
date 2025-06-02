/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission.js'
import { RoleManager } from './RoleManager.js'
import { RoleMember } from './RoleMember.js'

export const RoleCreateRequest = z.object({
  AdminRole: z.boolean(),
  Managers: z.array(RoleManager),
  Members: z.array(RoleMember),
  Permissions: z.array(Permission),
  RoleName: z.string()
})

export interface RoleCreateRequest extends z.TypeOf<typeof RoleCreateRequest> {}
