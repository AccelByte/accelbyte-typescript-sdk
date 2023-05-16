/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicConfiguration = z.object({
  clientVersion: z.string(),
  deployment: z.string(),
  dsSource: z.string().nullish(),
  fallbackClaimKeys: z.array(z.string()).nullish(),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  maxPlayers: z.number().int(),
  minPlayers: z.number().int(),
  name: z.string(),
  persistent: z.boolean(),
  preferredClaimKeys: z.array(z.string()).nullish(),
  requestedRegions: z.array(z.string()).nullish(),
  textChat: z.boolean(),
  type: z.string()
})

export interface PublicConfiguration extends z.TypeOf<typeof PublicConfiguration> {}
