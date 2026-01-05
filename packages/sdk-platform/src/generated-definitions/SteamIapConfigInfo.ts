/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SteamIapConfigInfo = z.object({
  appId: z.string().nullish(),
  env: z.enum(['LIVE', 'SANDBOX']).nullish(),
  namespace: z.string(),
  publisherAuthenticationKey: z.string(),
  syncMode: z.enum(['INVENTORY', 'TRANSACTION']).nullish()
})

export interface SteamIapConfigInfo extends z.TypeOf<typeof SteamIapConfigInfo> {}
