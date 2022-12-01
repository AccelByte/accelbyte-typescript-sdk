/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TwitchSyncRequest = z.object({ gameId: z.string().nullish(), region: z.string().nullish(), language: z.string().nullish() })

export type TwitchSyncRequest = z.TypeOf<typeof TwitchSyncRequest>
