/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RoleManager = z.object({ DisplayName: z.string(), Namespace: z.string(), UserId: z.string() })

export type RoleManager = z.TypeOf<typeof RoleManager>
