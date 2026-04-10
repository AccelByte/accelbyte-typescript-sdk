/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserStateResponseV3 = z.object({
  emailVerified: z.boolean(),
  enabled: z.boolean(),
  fullAccount: z.boolean(),
  testAccount: z.boolean()
})

export interface UserStateResponseV3 extends z.TypeOf<typeof UserStateResponseV3> {}
