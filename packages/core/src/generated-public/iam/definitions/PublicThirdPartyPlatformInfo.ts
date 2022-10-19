/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicThirdPartyPlatformInfo = z.object({
  AppId: z.string(),
  ClientId: z.string(),
  Environment: z.string(),
  IsActive: z.boolean(),
  PlatformId: z.string(),
  PlatformName: z.string()
})

export type PublicThirdPartyPlatformInfo = z.TypeOf<typeof PublicThirdPartyPlatformInfo>
