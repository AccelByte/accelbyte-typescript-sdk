/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SteamSyncRequest = z.object({
  appId: z.string(),
  currencyCode: z.string().nullish(),
  language: z.string().nullish(),
  price: z.number().nullish(),
  productId: z.string().nullish(),
  region: z.string().nullish(),
  steamId: z.string()
})

export interface SteamSyncRequest extends z.TypeOf<typeof SteamSyncRequest> {}
