/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SteamIapConfig = z.object({
  rvn: z.number().int().nullish(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  namespace: z.string().nullish(),
  publisherAuthenticationKey: z.string().nullish(),
  appId: z.string().nullish()
})

export type SteamIapConfig = z.TypeOf<typeof SteamIapConfig>
