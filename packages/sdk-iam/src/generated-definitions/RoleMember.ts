/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RoleMember = z.object({ DisplayName: z.string(), Namespace: z.string(), UserId: z.string() })

export interface RoleMember extends z.TypeOf<typeof RoleMember> {}
