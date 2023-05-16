/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SteamIapConfig = z.object({
  appId: z.string().nullish(),
  createdAt: z.string().nullish(),
  namespace: z.string().nullish(),
  publisherAuthenticationKey: z.string().nullish(),
  rvn: z.number().int().nullish(),
  updatedAt: z.string().nullish()
})

export interface SteamIapConfig extends z.TypeOf<typeof SteamIapConfig> {}
