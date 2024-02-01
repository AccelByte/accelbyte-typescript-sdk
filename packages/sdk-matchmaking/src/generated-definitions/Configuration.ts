/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Configuration = z.object({
  clientVersion: z.string(),
  deployment: z.string(),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  maxPlayers: z.number().int(),
  minPlayers: z.number().int(),
  name: z.string(),
  requestedRegions: z.array(z.string()),
  type: z.string()
})

export interface Configuration extends z.TypeOf<typeof Configuration> {}
