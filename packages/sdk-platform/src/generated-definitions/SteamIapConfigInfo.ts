/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SteamIapConfigInfo = z.object({ appId: z.string().nullish(), namespace: z.string(), publisherAuthenticationKey: z.string() })

export interface SteamIapConfigInfo extends z.TypeOf<typeof SteamIapConfigInfo> {}
