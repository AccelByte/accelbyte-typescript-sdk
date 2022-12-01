/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RoleAdminStatusResponseV3 = z.object({ adminRole: z.boolean() })

export type RoleAdminStatusResponseV3 = z.TypeOf<typeof RoleAdminStatusResponseV3>
