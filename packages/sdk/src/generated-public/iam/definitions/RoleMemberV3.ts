/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RoleMemberV3 = z.object({ displayName: z.string(), namespace: z.string(), userId: z.string() })

export interface RoleMemberV3 extends z.TypeOf<typeof RoleMemberV3> {}
