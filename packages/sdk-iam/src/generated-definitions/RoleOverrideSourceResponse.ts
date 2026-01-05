/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OverrideRolePermission } from './OverrideRolePermission.js'

export const RoleOverrideSourceResponse = z.object({ permissions: z.array(OverrideRolePermission) })

export interface RoleOverrideSourceResponse extends z.TypeOf<typeof RoleOverrideSourceResponse> {}
