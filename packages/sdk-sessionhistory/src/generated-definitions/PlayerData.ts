/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayerData = z.object({
  Attributes: z.record(z.any()).nullish(),
  PartyID: z.string().nullish(),
  PlatformID: z.string().nullish(),
  PlayerID: z.string().nullish()
})

export interface PlayerData extends z.TypeOf<typeof PlayerData> {}
