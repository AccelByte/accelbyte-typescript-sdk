/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameServer } from './GameServer.js'

export const DsInformationResponse = z.object({
  RequestedAt: z.string(),
  Server: GameServer.nullish(),
  Status: z.string(),
  StatusV2: z.string()
})

export interface DsInformationResponse extends z.TypeOf<typeof DsInformationResponse> {}
