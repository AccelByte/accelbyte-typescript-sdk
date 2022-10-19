/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SteamIapConfigRequest = z.object({ publisherAuthenticationKey: z.string().nullish(), appId: z.string() })

export type SteamIapConfigRequest = z.TypeOf<typeof SteamIapConfigRequest>
