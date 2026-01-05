/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BlockedPlayerData = z.object({ blockedAt: z.string(), blockedUserId: z.string() })

export interface BlockedPlayerData extends z.TypeOf<typeof BlockedPlayerData> {}
