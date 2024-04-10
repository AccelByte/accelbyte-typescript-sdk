/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AllowedPermission } from './AllowedPermission.js'

export const PermissionGroup = z.object({ group: z.string(), groupId: z.string(), permissions: z.array(AllowedPermission) })

export interface PermissionGroup extends z.TypeOf<typeof PermissionGroup> {}
