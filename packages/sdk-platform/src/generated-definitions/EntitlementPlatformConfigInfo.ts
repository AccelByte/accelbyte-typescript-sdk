/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementPlatformConfigInfo = z.object({
  allowedPlatformOrigins: z.array(z.string()),
  createdAt: z.string().nullish(),
  id: z.string().nullish(),
  namespace: z.string(),
  platform: z.string(),
  updatedAt: z.string().nullish()
})

export interface EntitlementPlatformConfigInfo extends z.TypeOf<typeof EntitlementPlatformConfigInfo> {}
