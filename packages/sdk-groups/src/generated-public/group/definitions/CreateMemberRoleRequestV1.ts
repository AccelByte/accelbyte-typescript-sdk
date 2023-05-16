/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RolePermission } from './RolePermission.js'

export const CreateMemberRoleRequestV1 = z.object({ memberRoleName: z.string(), memberRolePermissions: z.array(RolePermission) })

export interface CreateMemberRoleRequestV1 extends z.TypeOf<typeof CreateMemberRoleRequestV1> {}
