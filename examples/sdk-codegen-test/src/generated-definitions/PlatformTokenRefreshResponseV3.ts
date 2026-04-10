/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformTokenRefreshResponseV3 = z.object({
  avatarUrl: z.string().nullish(),
  country: z.string().nullish(),
  displayName: z.string().nullish(),
  platformTokenExpiresAt: z.number().int().nullish(),
  platformUserId: z.string().nullish()
})

export interface PlatformTokenRefreshResponseV3 extends z.TypeOf<typeof PlatformTokenRefreshResponseV3> {}
