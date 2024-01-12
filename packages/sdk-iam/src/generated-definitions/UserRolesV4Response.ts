/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserRolesV4Response = z.object({ assignedNamespaces: z.array(z.string()), roleId: z.string(), roleName: z.string() })

export interface UserRolesV4Response extends z.TypeOf<typeof UserRolesV4Response> {}
