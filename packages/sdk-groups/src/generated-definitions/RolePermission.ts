/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RolePermission = z.object({ action: z.number().int(), resourceName: z.string() })

export interface RolePermission extends z.TypeOf<typeof RolePermission> {}
