/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission.js'
import { RoleManager } from './RoleManager.js'

export const RoleResponseWithManagers = z.object({
  IsWildcard: z.boolean(),
  Managers: z.array(RoleManager),
  Permissions: z.array(Permission),
  RoleId: z.string(),
  RoleName: z.string()
})

export interface RoleResponseWithManagers extends z.TypeOf<typeof RoleResponseWithManagers> {}
