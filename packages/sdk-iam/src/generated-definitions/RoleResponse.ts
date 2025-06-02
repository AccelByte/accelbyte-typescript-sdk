/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission.js'

export const RoleResponse = z.object({
  IsWildcard: z.boolean(),
  Permissions: z.array(Permission),
  RoleId: z.string(),
  RoleName: z.string()
})

export interface RoleResponse extends z.TypeOf<typeof RoleResponse> {}
