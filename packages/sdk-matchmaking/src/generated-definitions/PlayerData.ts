/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayerData = z.object({ Attributes: z.record(z.any()), PartyID: z.string(), PlatformID: z.string(), PlayerID: z.string() })

export interface PlayerData extends z.TypeOf<typeof PlayerData> {}
