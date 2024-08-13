/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SessionConfig = z.object({
  ClientVersion: z.string().nullish(),
  Deployment: z.string().nullish(),
  InactiveTimeout: z.number().int().nullish(),
  InviteTimeout: z.number().int().nullish(),
  Joinability: z.string().nullish(),
  MaxPlayers: z.number().int().nullish(),
  MinPlayers: z.number().int().nullish(),
  Name: z.string().nullish(),
  Persistent: z.boolean().nullish(),
  RequestedRegions: z.array(z.string()).nullish(),
  Type: z.string().nullish()
})

export interface SessionConfig extends z.TypeOf<typeof SessionConfig> {}
