/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RoleMember = z.object({ DisplayName: z.string(), Namespace: z.string(), UserId: z.string() })

export type RoleMember = z.TypeOf<typeof RoleMember>
