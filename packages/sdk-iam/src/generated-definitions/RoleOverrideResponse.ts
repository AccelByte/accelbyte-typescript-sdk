/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OverrideRolePermission } from './OverrideRolePermission.js'
import { ReplaceRolePermission } from './ReplaceRolePermission.js'

export const RoleOverrideResponse = z.object({
  active: z.boolean(),
  additions: z.array(OverrideRolePermission),
  createdAt: z.string().nullish(),
  exclusions: z.array(OverrideRolePermission),
  identity: z.string(),
  namespace: z.string(),
  overrides: z.array(OverrideRolePermission),
  replacements: z.array(ReplaceRolePermission),
  updatedAt: z.string().nullish()
})

export interface RoleOverrideResponse extends z.TypeOf<typeof RoleOverrideResponse> {}
