/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Server } from './Server.js'

export const DsInformation = z.object({
  MinPlayers: z.number().int(),
  RequestedAt: z.string(),
  RequestedRegions: z.array(z.string()),
  Server,
  Status: z.string()
})

export interface DsInformation extends z.TypeOf<typeof DsInformation> {}
