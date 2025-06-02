/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateGamesessionDsInformationRequest = z.object({
  createdRegion: z.string(),
  deployment: z.string(),
  description: z.string(),
  ip: z.string(),
  port: z.number().int(),
  region: z.string(),
  serverId: z.string(),
  source: z.string(),
  status: z.string()
})

export interface UpdateGamesessionDsInformationRequest extends z.TypeOf<typeof UpdateGamesessionDsInformationRequest> {}
