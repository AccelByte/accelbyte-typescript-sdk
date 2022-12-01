/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RoleAdminStatusResponse = z.object({ AdminRole: z.boolean() })

export type RoleAdminStatusResponse = z.TypeOf<typeof RoleAdminStatusResponse>
