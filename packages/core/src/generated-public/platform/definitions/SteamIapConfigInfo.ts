/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SteamIapConfigInfo = z.object({ namespace: z.string(), publisherAuthenticationKey: z.string(), appId: z.string().nullish() })

export type SteamIapConfigInfo = z.TypeOf<typeof SteamIapConfigInfo>
