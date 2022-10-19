/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission'
import { RoleManager } from './RoleManager'

export const RoleResponseWithManagers = z.object({
  IsWildcard: z.boolean(),
  Managers: z.array(RoleManager),
  Permissions: z.array(Permission),
  RoleId: z.string(),
  RoleName: z.string()
})

export type RoleResponseWithManagers = z.TypeOf<typeof RoleResponseWithManagers>
