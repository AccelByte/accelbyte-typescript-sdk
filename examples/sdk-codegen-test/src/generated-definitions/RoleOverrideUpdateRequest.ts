/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OverrideRolePermission } from './OverrideRolePermission.js'
import { ReplaceRolePermission } from './ReplaceRolePermission.js'

export const RoleOverrideUpdateRequest = z.object({
  additions: z.array(OverrideRolePermission),
  exclusions: z.array(OverrideRolePermission),
  overrides: z.array(OverrideRolePermission),
  replacements: z.array(ReplaceRolePermission)
})

export interface RoleOverrideUpdateRequest extends z.TypeOf<typeof RoleOverrideUpdateRequest> {}
