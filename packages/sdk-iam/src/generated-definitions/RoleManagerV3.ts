/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RoleManagerV3 = z.object({ displayName: z.string(), namespace: z.string(), userId: z.string() })

export interface RoleManagerV3 extends z.TypeOf<typeof RoleManagerV3> {}
