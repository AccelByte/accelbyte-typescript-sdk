/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RolePermission } from './RolePermission.js'

export const UpdateMemberRolePermissionsRequestV1 = z.object({ memberRolePermissions: z.array(RolePermission) })

export interface UpdateMemberRolePermissionsRequestV1 extends z.TypeOf<typeof UpdateMemberRolePermissionsRequestV1> {}
