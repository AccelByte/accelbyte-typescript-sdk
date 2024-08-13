/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameServer } from './GameServer.js'

export const DsInformation = z.object({
  RequestedAt: z.string().nullish(),
  Server: GameServer.nullish(),
  Status: z.string().nullish(),
  StatusV2: z.string().nullish()
})

export interface DsInformation extends z.TypeOf<typeof DsInformation> {}
