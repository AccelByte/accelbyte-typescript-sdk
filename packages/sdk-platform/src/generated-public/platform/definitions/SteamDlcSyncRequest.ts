/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SteamDlcSyncRequest = z.object({ steamId: z.string(), appId: z.string().nullish() })

export interface SteamDlcSyncRequest extends z.TypeOf<typeof SteamDlcSyncRequest> {}
