/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OverrideRolePermission } from './OverrideRolePermission.js'

export const ReplaceRolePermission = z.object({ replacement: OverrideRolePermission, target: z.string() })

export interface ReplaceRolePermission extends z.TypeOf<typeof ReplaceRolePermission> {}
