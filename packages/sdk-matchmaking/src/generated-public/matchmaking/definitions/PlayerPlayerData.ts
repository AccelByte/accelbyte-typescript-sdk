/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayerPlayerData = z.object({ Attributes: z.record(z.any()), PartyID: z.string(), PlayerID: z.string() })

export interface PlayerPlayerData extends z.TypeOf<typeof PlayerPlayerData> {}
