/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OverrideRolePermission = z.object({ actions: z.array(z.number().int()), resource: z.string() })

export interface OverrideRolePermission extends z.TypeOf<typeof OverrideRolePermission> {}
