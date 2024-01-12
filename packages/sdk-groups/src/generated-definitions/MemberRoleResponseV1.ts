/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RolePermission } from './RolePermission.js'

export const MemberRoleResponseV1 = z.object({
  memberRoleId: z.string(),
  memberRoleName: z.string(),
  memberRolePermissions: z.array(RolePermission)
})

export interface MemberRoleResponseV1 extends z.TypeOf<typeof MemberRoleResponseV1> {}
