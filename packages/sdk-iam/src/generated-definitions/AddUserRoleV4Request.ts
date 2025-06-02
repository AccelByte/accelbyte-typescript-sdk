/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AddUserRoleV4Request = z.object({ assignedNamespaces: z.array(z.string()), roleId: z.string() })

export interface AddUserRoleV4Request extends z.TypeOf<typeof AddUserRoleV4Request> {}
