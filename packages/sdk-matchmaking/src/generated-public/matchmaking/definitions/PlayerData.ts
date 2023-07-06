/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayerData = z.object({
  attributes: z.record(z.any()).nullish(),
  partyID: z.string().nullish(),
  playerID: z.string().nullish()
})

export interface PlayerData extends z.TypeOf<typeof PlayerData> {}
